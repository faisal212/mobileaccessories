import React, { Component } from 'react'
import styled from 'styled-components';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';

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
.container {
  @media (min-width:768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  } 
    
}


  

`;