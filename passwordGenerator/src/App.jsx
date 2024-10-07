import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numsallowed, setNumsallowed] = useState(false);
  const [chara, setChara] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passgenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numsallowed) str += "1234567890";
    if (chara) str += "!@#$%^&*(_+~><?/\|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // Corrected random index calculation
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numsallowed, chara]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();  // .select() can work on input, no need to add "?"
      window.navigator.clipboard.writeText(password); // Corrected clipboard API
    }
  }, [password]);

  useEffect(() => {
    passgenerator();
  }, [length, numsallowed, chara, passgenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}  // Corrected the state variable name
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numsallowed}  // Corrected state variable
            id="numberInput"
            onChange={() => setNumsallowed((prev) => !prev)}  // Corrected setter function
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={chara}  // Corrected state variable
            id="characterInput"
            onChange={() => setChara((prev) => !prev)}  // Corrected setter function
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
