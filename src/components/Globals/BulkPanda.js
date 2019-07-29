import React,{useState,createContext} from 'react';

export const WalletContext = createContext();


export default function BulkPanda(props) {
    const [wallet, setWallet] = useState({
      amount: 0,
      code: null
    });
      return (
      <WalletContext.Provider value={[wallet,setWallet]}>
        {props.children}
      </WalletContext.Provider>
      )
}




  