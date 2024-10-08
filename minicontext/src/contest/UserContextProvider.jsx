import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider=({children})=>{
    cosnt [user,setUser]=React.useState(null);
    <UserContext.Provider value={{user}}>
    {children}
    </UserContext.Provider>
}


export default UserContextProvider;
