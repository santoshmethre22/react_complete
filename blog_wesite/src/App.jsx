import { useEffect, useState } from 'react'
import authSlice,{login,logout} from './store/authSlice'
import authService from './appwrite/auth'
import './App.css'
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}));
      }
      else{
        dispatch(logout());
      }
    }).finally(()=>{
      setLoading(false);
    })
  },[])

  return !loading?(
    <div>
       test
       <div>
       <Header/>
       <main>
       <outlet/>
       </main>
       <Footer />

       </div>
    </div>
  ):null
}

export default App
