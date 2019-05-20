import React, { Component } from 'react'
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import * as styles from '../../../utils/styles';

export default class NavbarLinks extends Component {
    state = {
        links: [
            {
                id: 0,
                path: '/',
                name: 'home'
            },
            {
                id: 1,
                path: '/samsung',
                name: 'samsung'
            },
            {
                id: 2,
                path: '/apple',
                name: 'apple'
            },
        ]
    };

    render() {
		const {handleNavbar} = this.props;
        return (
            <LinkWrapper className="menu-content" open={this.props.navbarOpen}>
                <div className="bar">Mobile Accessories</div>
                <IoIosClose className="close-button" onClick={() => { handleNavbar() }}  />
                <ul>
                    {
                        this.state.links.map(item => (
                            <li key={item.id}>
                                <AniLink  fade to={item.path} className="nav-link ripple">
                                    {item.name}
                                </AniLink >
                            </li>
                        ))
                    }
                </ul>
            </LinkWrapper>

        )
    }
}

const LinkWrapper = styled.div`
display: flex;
flex: auto;
flex-direction: column;
    .bar {
        display:none;
        text-align: center;
        padding: 10px 20px;
        font-size: 1.25rem;
        text-align:center;
        background: ${styles.colors.mainOrange};
    }
    @media(max-width: 768px){
        position: fixed;
        top: 0;
        left: 0;
        max-width: 320px;
        width: 70vw;
        height: 100%;
        background: #fff;
        transform: ${props => (props.open ? 'transform: translate3d(40px, 0, 0)' : 'translate3d(-111%, 0%, 0px)')} ;
		transition: all 200ms cubic-bezier(0.61, 0.92, 0.68, 1.14) 0s;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
        z-index: 100;
        .bar{
            display: block;
        }
    }

   ul {
		li {
			list-style: none
		}
		.nav-link {
			display: block;
			font-size: 1.4rem;
			text-decoration: none;
			padding: 0 0.875rem;
			color: ${styles.colors.mainGrey};
			font-weight: 600;
			text-transform: capitalize;
			cursor: pointer;
			${styles.transDefault};
			line-height: 4.5rem;
			position: relative;
			&:before{
				position: absolute;
				display: block;
				content: '';
				width: 100%;
				bottom: 0;
				left: 0;
				height: 2px;
				background:  ${styles.colors.mainOrange};
				transform: scaleX(0);
				${styles.transObject({ time: '0.3s', type: 'linear' })}
			
			}
			&:hover{
				color: ${styles.colors.mainOrange};
				
			}
			&:hover:before{
				transform: scaleX(1);

			}
			@media (min-width:768px) {
					line-height: 5.5rem;
					font-size: 0.8125rem;

			}


		}
		overflow: hidden;
		@media (min-width:768px) {
			height: auto;
			display: flex;
			margin: 0 auto;
			
		}
	}


    .close-button{
        font-size: 1.74rem;
        font-size: 2.74rem;
        position: absolute;
		cursor: pointer;
        right: 15px;
        @media (min-width: 768px) {
        	display: none;
        }
			
    }   

  
`