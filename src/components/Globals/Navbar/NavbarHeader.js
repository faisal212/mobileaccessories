import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../../images/logo.png';
import { FaAlignRight, FaOpencart} from 'react-icons/fa';
import styled from 'styled-components';

export default class NavbarHeader extends Component {
    render() {
        const { handleNavbar } = this.props;
        return (
            <HeaderWrapper>
                <FaAlignRight className="toggle-icon" onClick={() => { handleNavbar() }} />

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

.toggle-icon{
    cursor: pointer;

    font-size: 1.75rem;
    color: #fff;
    cursor: pointer;
    @media (min-width:768px) {
    display: none;
    }
}


`;