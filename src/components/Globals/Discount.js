
import React from 'react'
import styled from 'styled-components';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import {colors,robotoFont,transDefault} from '../../utils/styles';




export default class Discount extends React.Component {
  selectDiscount = (e) => {
    this.props.selectDiscount(e);
  }
  render() {
    const {items,selectedWallet} = this.props;
  
    return (
      <DiscountViewWrapper
      >
        <div className="inner-product-header" id="discount-header">


         {items.length ? (
           <div>
           <h2 >{typeof selectedWallet !== 'undefined' ? `${selectedWallet.label} discount is selected`: 'Choose the discounts you want to use for your next order'}</h2>
            <Dropdown options={items} onChange={this.selectDiscount} value={selectedWallet} placeholder="Select an option" />
           </div>
         ): (<h2>No Discount is availaible for you</h2>)}
        </div>
    </DiscountViewWrapper>
    )
  }
}


const DiscountViewWrapper = styled.div`
.link {
  display: block;
}
background: #fff;
border: 1px solid #e1e1e1;
.product-img{
  border-bottom :  1px solid #e1e1e1;
}
.inner-product-header {
  padding: 0.625rem 0.9375rem 0.9375rem;
  position: relative;
}
h1{
  font-family:'Montserrat',sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
margin-bottom: 20px;
}

select {
  display: block;
  width: 100%;
}
select option{
  padding: 215px 5px;

}
.price {
  font-weight: 600;
  font-size: 0.9375rem;
  color: ${colors.mainOrange};

}
.colors {
    list-style: none;
    display: inline-flex;
    right: 0.9375rem;
    top: 0.625rem;
    position: absolute;
    text-align: right;
    justify-content: flex-end;
}
.colors li {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
@media (max-width:767px) {
  text-align:center;
  .product-img{
    height: 6.25rem;
    width: 6.25rem;
    margin:0 auto;
  }
  .colors{
    display:none;
  }
}
`;