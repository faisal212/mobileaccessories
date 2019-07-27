import React,{useState,createContext} from 'react';

export const WalletContext = createContext();


export default function BulkPanda(props) {
    const [wallet, setWallet] = useState({
        code: null,
        wallet: 0
      });
      return (
      <WalletContext.Provider value={[wallet,setWallet]}>
        {props.children}
      </WalletContext.Provider>
      )
}




  