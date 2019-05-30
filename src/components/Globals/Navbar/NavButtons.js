import React from "react"
import styled from 'styled-components';
import {  IoIosCart} from 'react-icons/io';
import {colors} from '../../../utils/styles';

export default class NavButtons  extends React.Component{
  state = {
    count: 0
  }
  componentDidMount(){
    console.log('navbutttons');
    window.Snipcart.subscribe('page.validating', function(ev, data) {
      if((ev.type === 'shipping-address' || ev.type === 'billing-address') && !data.phone.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
          ev.addError('phone', 'Please enter a valid pakistani number');
      }
     
     
  });
     
  } 
  componentWillUnmount(){
    window.Snipcart.unsubscribe('page.validating');

  }
 render(){

  let  user = undefined;
  if(typeof window !== 'undefined'){
    if(typeof window.Snipcart.api !== 'undefined')
    user = window.Snipcart.api.user.current();
  }
  return (
   <NavButtonsWrapper>
          <IoIosCart className="cart icon snipcart-checkout" />
        
        
          <a href="#" className="snipcart-user-profile">
          {typeof user !== "undefined" ? user.email: 'Login & Signup'}
</a>
   </NavButtonsWrapper>
  )
 }
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
  .snipcart-user-profile{
  color: inherit !important;

}
}
.snipcart-user-profile{
  color: #fff;
  margin: 0 0.625rem;
}
`;

