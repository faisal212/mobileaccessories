import React from 'react'
import styled from 'styled-components';
import {  IoIosCart} from 'react-icons/io';
import {colors} from '../../../utils/styles';
export default function NavButtons() {
  return (
   <NavButtonsWrapper>
          <IoIosCart className="cart icon snipcart-checkout" />

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


@media (min-width:768px) {
  position: static;
  .icon{
    color: ${colors.mainOrange};

  }
}

`;