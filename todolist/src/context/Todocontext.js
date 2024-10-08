import React, { createContext, useContext } from "react";

export const TodoContext=createContext({

    todos:[
        {
            id:1,
            todo:"todo msg",
            completd:false
        },

        
    ]
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const Todoprovider=TodoContext.Provider