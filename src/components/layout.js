/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React  from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components';
import {colors,headingFont} from '../utils/styles';
import Footer from './Globals/Footer';
import { ScreenClassProvider} from 'react-grid-system';

const Layout = ({ children ,isHome}) => {
  return(
  <React.Fragment>
    <GlobalStyle/>
    
    <ScreenClassProvider>
        {children}  
    </ScreenClassProvider>    
    <Footer/>
  </React.Fragment>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.background-white{
  background: #ffffff;
}
html{
  font-size: 16px;
}
@media (max-width:767px){
  html{
    font-size:14px;
  
  }
  .column-wrapper{
    padding: 0 5px !important;
  }
  .category > div > div{
    padding: 0  !important;

  }
}
h1,h2,h3,h4,h5,h6{
  font-family:${headingFont};
  font-weight: 400


}
a{
  cursor: pointer;
}
li{
  list-style: none;
}
body{
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  color: ${colors.mainBlack};
  background: #f5f5f5;

}
.large-image-container{
  z-index:1200 !important;
}
p,button{
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  


}
.container {
  width: 1210px;
}
.background-white{
  background: white;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
.default-background {
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: unset !important;
 
}

.firebaseui-button {
  background: ${colors.mainOrange} !important;
}
#firebaseui_container{
  position: fixed;
  left:50%;
  transform:translateX(-50%);
  top: 100px;
  z-index: 15;
  box-shadow: 0 0 12px 2111px rgba(0,0,0,.35);
  
}

.ripple {
  position: relative;
  overflow: hidden;
}
.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .3s, opacity 1s;
}
.ripple:active:after {
  transform: scale(0, 0);
  opacity: .2;
  transition: 0s;
}


.snip-layout .snip-btn{
  background:${colors.mainOrange} !important;
  color: #fff !important;
}
.snip-layout .snip-form__error{
  background:${colors.mainOrange} !important;

}
.snip-layout{
  font-family: 'Lato', sans-serif !important;

}
`;

export default Layout
