import  { createContext, useContext } from "react";

export const TodoContext=createContext({

    todos:[
        {
            id:1,
            todo:"todo msg",
            completd:false
        },


    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const Todoprovider=TodoContext.Provider