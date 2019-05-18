import React, { useState } from "react";
export const AuthContext = React.createContext(null);


export default function AuthContextProvider(props) {
    const [authUser, setAuthUser] = useState({ user: "" })                                                          
    return (
            <AuthContext.Provider value={{authUser,setAuthUser}}>
                {props.children} 
            </AuthContext.Provider>
        )
}
