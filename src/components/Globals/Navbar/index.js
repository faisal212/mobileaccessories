import React, { Component } from 'react'
import styled from 'styled-components';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import NavButtons from './NavButtons';
import {colors} from '../../../utils/styles';

export default class index extends Component {
  state = {
    navbarOpen: false
  };
 

  handleNavbar = () => {
    this.setState({
        navbarOpen: !this.state.navbarOpen
    });
}
  render() {
    const { isHome } = this.props;
    return (
      <NavWrapper className="background-white" isHome={isHome} navbarOpen={this.state.navbarOpen} >
        <div className="container">
          <NavbarHeader handleNavbar={this.handleNavbar} />
          <NavbarLinks  navbarOpen={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
          <NavButtons className="nav-buttons"/>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
position: ${props => (props.isHome ? `absolute` : 'static')};

z-index: 12;
width: 100%;
left: 0;
display :flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid #e1e1e1;
background: #FF6709;
@media (min-width:768px) {
  .container {
      justify-content: center;
  } 
  background: #fff;
}


.container{
  display: flex;
  align-items: center;
}   


`;