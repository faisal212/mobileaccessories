import React, { useState, useEffect, useContext } from "react"
import styled from 'styled-components';
import { IoIosCart, IoIosArrowDown } from 'react-icons/io';
import { colors, transDefault } from '../../../utils/styles';
import axios from 'axios';
import { getCookie } from '../../../utils/utils';
import Discounts from "../Discounts";
import { UserContext } from "../User";
import { WalletContext } from "../BulkPanda";



export default function NavButtons() {

  const [user, setUser] = useContext(UserContext);
  const [wallet, setWallet] = useContext(WalletContext);
  const [count, setCount] = useState(0);

  const [modalOpen, setmodalOpen] = useState(false);

  const getDiscount = async() =>{
    const result = await axios.post("/.netlify/functions/getdiscount", {
      session: getCookie('snipcart_auth_cookie'),
    });
    setWallet({
      amount: result.data.wallet,
      code: result.data.code
    });
  } 
  useEffect( () => {
    if(count=== 0 && typeof window.Snipcart.api.user.current()!== "undefined"){
      getDiscount();  
      setCount(1);
    }
      window.Snipcart.subscribe('page.validating', function (ev, data) {
      if ((ev.type === 'shipping-address' || ev.type === 'billing-address') && !data.phone.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
        ev.addError('phone', 'Please enter a valid pakistani number');
      }
    });

    window.Snipcart.subscribe('authentication.success', async (email) => {
      setUser(window.Snipcart.api.user.current());
      const userCreationDate = window.Snipcart.api.user.current().creationDate;
      const milliseconds = parseInt("1000");
      const hours = Math.floor(milliseconds / 3600000);
      const differenceTime = Date.now() - new Date(userCreationDate);
      const minutes = Math.floor((differenceTime - (hours * 3600000)) / 60000);
      console.log("tottal minuts " + minutes);
      console.log("auth success is calling");
      try {
        if (minutes < 5) {
          await axios.post("/.netlify/functions/addDiscount", {
            session: getCookie('snipcart_auth_cookie'),
          }); 
          getDiscount();
        } else { 
          getDiscount();  
          setCount(1);
        }
      } catch (error) {
        console.log(error)
      }
    });

    window.Snipcart.subscribe('page.change', (page) => {
      if (page.includes('cart-content')) {
        if(wallet.code){
          console.log('i am here');
          window.Snipcart.api.discounts.applyDiscountCode(wallet.code)
          .then(function (appliedCode) {
            console.log('wallet applied');
          })
          .fail(function (error) {
            console.log("Something went wrong when adding the discount code, are you sure it's a valid code?", error);
          });
        }
      }

    });

    window.Snipcart.subscribe('cart.ready', (data) => {
      console.log(window.Snipcart.api.user.current())
      if (typeof window.Snipcart.api.user.current() !== 'undefined') {
        setUser(window.Snipcart.api.user.current());

      }
    });
    return () => {
      window.Snipcart.unsubscribe('page.validating');
      window.Snipcart.unsubscribe('authentication.success');
      window.Snipcart.unsubscribe('page.change');
      window.Snipcart.unsubscribe('cart.ready');
    };
  }, [])




  const logoutButton = () => {
    window.Snipcart.api.user.logout();
    setUser(undefined);
  }
  const showModal = () => {
    setmodalOpen(!modalOpen);

  }

  return (
    <NavButtonsWrapper>
      {wallet && <Discounts onClick={showModal} modalOpen={modalOpen} amount={wallet.amount} />}
      <IoIosCart className="cart icon snipcart-checkout" />

      {
        typeof user !== "undefined" ? (
          <div className="my-account" >
            <span>{user.email}</span>
            <IoIosArrowDown className=" icon " />
            <ul className={`my-account-dropdown `}>
              <li><span className="snipcart-user-profile ripple">Orders</span></li>
              <li><span className="ripple" onClick={logoutButton}>Logout</span></li>
              <li onClick={showModal}>Wallet</li>
            </ul>
          </div>) : (<span className="snipcart-user-profile">
            Login & Signup
  </span>)
      }
    </NavButtonsWrapper>
  )

}

const NavButtonsWrapper = styled.div`
.icon{
    font-size: 1.6875rem;
    color: #fff;
    cursor: pointer;
}

  position: absolute;
  right: 15px;
  display: flex;
  align-items: center;


@media (min-width:768px) {
  position: static;
  display: flex;
  align-items: center;
  .icon{
    color: ${colors.mainOrange};
  }
}

.snipcart-user-profile{
  cursor: pointer;
}

.my-account{
  position: relative;
  cursor: pointer;
  .icon{
    position: absolute;
    right: -20px;
    font-size: 1.2rem;
  }
  margin: 0 0.625rem;

}
.my-account-dropdown{
  
  position: absolute;
  
    width: 120%;
    box-shadow: 1px 1px 4px 1px grey;
    text-align: center;
    bottom: -100px;
    background: #fff;
    color: #444;
    display: none;
    ${transDefault};
    li{
      padding:5px 0;
      border-bottom: 1px solid #e1e1e1;
      span{
        display:inline-block;
        width:100%;
      }
    }
}
.my-account:hover .my-account-dropdown{
  display:block;
}
`;



function applyCode() {
  if (typeof window.selectedWallet !== 'undefined' && window.Snipcart.api.items.count() !== 0) {
    window.Snipcart.api.discounts.applyDiscountCode(window.selectedWallet.value)
      .then(function (appliedCode) {
        console.log('discount is applied');
      })
      .fail(function (error) {
        console.log("Something went wrong when adding the discount code, are you sure it's a valid code?", error);
      });
  }
}




