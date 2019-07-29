import React,{useState,createContext} from 'react';

export const WalletContext = createContext({
  amount: 0,
  code: null
});


export default function BulkPanda(props) {
    const [wallet, setWallet] = useState(null);
      return (
      <WalletContext.Provider value={[wallet,setWallet]}>
        {props.children}
      </WalletContext.Provider>
      )
}




  