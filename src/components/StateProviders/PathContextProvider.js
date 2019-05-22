import React, { useState } from "react";
export const PathContext = React.createContext(null);


export default function PathContextProvider(props) {
    const [paths, setPaths] = useState({list: [], previousPath: '/'});                                                           
    return (
            <PathContext.Provider value={{paths,setPaths}}>
                {props.children} 
            </PathContext.Provider>
        )
}
