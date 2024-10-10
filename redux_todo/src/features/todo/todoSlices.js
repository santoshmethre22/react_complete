import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    // there is problem if u take todos:[{id:1,text:"hello world"}]
    todos: [] // i have debugged it like this and tehre no ini state printing
};

export const todoslice = createSlice({
    name: 'todo',
    initialState,// corrected key
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(), // invoking nanoid correctly
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload); // added return
        },
        // updatetodo can be added later if needed
    }
});

export const { addtodo, removetodo, updatetodo } = todoslice.actions;

export default todoslice.reducer;
