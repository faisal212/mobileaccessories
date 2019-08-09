import React from 'react'
import logo from '../../../images/logo.png';
import { IoIosArrowRoundBack,IoIosMenu} from 'react-icons/io';
import styled from 'styled-components';
import {Link} from "gatsby";

const goBack = () => {
    if(window.location.href.includes('#')){
        window.history.go(-3);

    }else{
        window.history.back();

    }
}

export default function NavbarHeader({ handleNavbar, isHome} ) {
        const isWindow = typeof window !== 'undefined';
  
        return (
            <HeaderWrapper>
                
                {isHome ? 
                    (<IoIosMenu className="toggle-icon icon" onClick={() => { handleNavbar() }} />
                    ): (
                         <span>{typeof isWindow ? ( 
                         <IoIosArrowRoundBack className="icon back-icon" onClick={goBack}  />) : ''}</span>

                    )
                }
                <Link   bg="#663399" to='/' className="logo">
                    {/* <img src={logo} alt="company name" /> */}
                    BULKPANDA
                </Link>

            </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`

padding: 0.4rem 1rem;
display: flex;
align-items: center;

.logo {
    font-family: 'Lato',sans-serif;
    font-size: 20px;
    font-weight: 700;
}
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