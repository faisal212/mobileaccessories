import React from 'react'
import whiteLogo from '../../../images/White-Panda.png';
import orangeLogo from '../../../images/Orange-Panda.png';
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
                    <img src={orangeLogo}  class="dark-logo" alt="company name" />
                    <img src={whiteLogo}  class="white-logo" alt="company name" />
             </Link>

            </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`

padding: 0.4rem 1rem;
display: flex;
align-items: center;

.logo img {
    width: 68px;

}
.dark-logo {
   display: inline-block;

}
.white-logo{
    display: none;
}
.icon{
    cursor: pointer;
    font-size: 2rem;
    cursor: pointer;
    @media (min-width:768px) {
    display: none;
    }
}

@media (max-width:767px) {
    .dark-logo {
   display: none;

}
.white-logo{
    display: inline-block;
}
}
.back-icon{
    font-size: 3rem;
}

`; 