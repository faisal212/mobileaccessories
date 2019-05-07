/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components';
import {colors,headingFont} from '../utils/styles';
import Navbar from './Globals/Navbar';
import Footer from './Globals/Footer';
const Layout = ({ children ,isHome}) => (
  <React.Fragment>
    <GlobalStyle/>
    <Navbar isHome={isHome}/>
    {children}    
    <Footer/>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 16px;
}
h1,h2,h3,h4,h5,h6{
  font-family:${headingFont};

}
body{
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${colors.mainBlack};
  background: #f5f5f5;

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
`

export default Layout
