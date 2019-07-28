import React,{useState,createContext} from 'react';

export const UserContext = createContext();


export default function User(props) {
    const [user, setUser] = useState(undefined);
      return (
      <UserContext.Provider value={[user ,setUser]}>
        {props.children}
      </UserContext.Provider>
      )
}




  