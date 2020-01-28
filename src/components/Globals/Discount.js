
import React from 'react'
import styled from 'styled-components';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { colors, robotoFont, transDefault } from '../../utils/styles';




export default class Discount extends React.Component {
  selectDiscount = (e) => {
    this.props.selectDiscount(e);
  }
  render() {
    const { items, selectedWallet } = this.props;

    return (
      <DiscountViewWrapper
      >
        <div className="inner-product-header" id="discount-header">


          {items.length ? (
            <div>
              <h2 >{typeof selectedWallet !== 'undefined' ? `${selectedWallet.label} discount is selected` : 'Choose the discounts you want to use for your next order'}</h2>
              <Dropdown options={items} onChange={this.selectDiscount} value={selectedWallet} placeholder="Select an option" />
            </div>
          ) : (<h2>No Discount is availaible for you</h2>)}
        </div>

        <div class="pyro">
          <div class="before"></div>
          <div class="after"></div>
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
.pyro > .before, .pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84, 190px 16.33333px #002bff, -113px -308.66667px #ff009d, -109px -287.66667px #ffb300, -50px -313.66667px #ff006e, 226px -31.66667px #ff4000, 180px -351.66667px #ff00d0, -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00, -69px -27.66667px #ff0400, -111px -339.66667px #6200ff, 155px -237.66667px #00ddff, -152px -380.66667px #00ffd0, -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00, -88px 10.33333px #0d00ff, 112px -309.66667px #005eff, 69px -415.66667px #ff00a6, 168px -100.66667px #ff004c, -244px 24.33333px #ff6600, 97px -325.66667px #ff0066, -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff, 140px -196.66667px #9000ff, 125px -175.66667px #00bbff, 118px -381.66667px #ff002f, 144px -111.66667px #ffae00, 36px -78.66667px #f600ff, -63px -196.66667px #c800ff, -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff, -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2, 91px -278.66667px #000dff, -22px -191.66667px #9dff00, 139px -392.66667px #a6ff00, 56px -2.66667px #0099ff, -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb, -238px -346.66667px #00ff73, 62px -363.66667px #0088ff, 244px -170.66667px #0062ff, 224px -142.66667px #b300ff, 141px -208.66667px #9000ff, 211px -285.66667px #ff6600, 181px -128.66667px #1e00ff, 90px -123.66667px #c800ff, 189px 70.33333px #00ffc8, -18px -383.66667px #00ff33, 100px -6.66667px #ff008c;
  -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; }

.pyro > .after {
  -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s;
  animation-delay: 1.25s, 1.25s, 1.25s;
  -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s;
  animation-duration: 1.25s, 1.25s, 6.25s; }

@-webkit-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-moz-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-o-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-ms-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-webkit-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-moz-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-o-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-ms-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }


`;