import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../../images/logo.png';
import { IoIosArrowRoundBack,IoIosMenu} from 'react-icons/io';
import styled from 'styled-components';

export default class NavbarHeader extends Component {
    goBack = () => {
        if(window.location.href.includes('#')){
            window.history.go(-3);

        }else{
            window.history.back();

        }
    }
    render() {
        
        const { handleNavbar, isHome} = this.props;
        return (
            <HeaderWrapper>
                
                {isHome ? 
                    (<IoIosMenu className="toggle-icon icon" onClick={() => { handleNavbar() }} />
                    ): (
                         <span>{typeof window !== 'undefined' ? (<IoIosArrowRoundBack className="icon back-icon" onClick={this.goBack} />) : ''}</span>

                    )
                }
                <Link to='/'>
                    <img src={logo} alt="company name" />
                </Link>

            </HeaderWrapper>
        )
    }
}

const HeaderWrapper = styled.div`

padding: 0.4rem 1rem;
display: flex;
align-items: center;

.icon{
    cursor: pointer;
    font-size: 2rem;
    cursor: pointer;
    @media (min-width:768px) {
    display: none;
    }
}

.back-icon{
    font-size: 3rem;
}
`;