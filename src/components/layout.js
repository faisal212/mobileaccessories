/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React ,{useContext} from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components';
import {colors,headingFont} from '../utils/styles';
import Navbar from './Globals/Navbar';
import Footer from './Globals/Footer';
import { ScreenClassProvider} from 'react-grid-system';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {FirebaseContext} from '../services/firebase';
const Layout = ({ children ,isHome}) => {
   const Firebase = useContext(FirebaseContext);
  return(
  <React.Fragment>
    <GlobalStyle/>
    <Navbar isHome={isHome}/>
    
    <ScreenClassProvider>
    <StyledFirebaseAuth uiConfig={Firebase.uiConfig} 
        firebaseAuth={Firebase.auth}
      />
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
}
h1,h2,h3,h4,h5,h6{
  font-family:${headingFont};
  font-weight: 400


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
`

export default Layout
