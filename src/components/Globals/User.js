import React,{useState,createContext} from 'react';

export const UserContext = createContext();


export default function User(props) {
    const [auth, setauth] = useState({});
      return (
      <UserContext.Provider value={[auth ,setauth]}>
        {props.children}
      </UserContext.Provider>
      )
}




  