import React from "react"
import styled from 'styled-components';
import { IoIosCart, IoIosArrowDown } from 'react-icons/io';
import { colors, transDefault } from '../../../utils/styles';
import axios from 'axios';
export default class NavButtons extends React.Component {
  state = {
    dropdownClass: ''
  }
  componentDidMount() {
    window.Snipcart.subscribe('page.validating', function (ev, data) {
      if ((ev.type === 'shipping-address' || ev.type === 'billing-address') && !data.phone.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
        ev.addError('phone', 'Please enter a valid pakistani number');
      }


    });
    window.Snipcart.subscribe('authentication.success', function (email) {
      const userCreationDate = window.Snipcart.api.user.current().creationDate;
      const milliseconds = parseInt("1000");
      const hours = Math.floor(milliseconds / 3600000);
      const differenceTime = Date.now() - new Date(userCreationDate);
      const minutes = Math.floor((differenceTime - (hours * 3600000)) / 60000);;

      if (minutes < 5) {
     
      }
      axios.post("/.netlify/functions/addDiscount", {
        email: email
      }).catch(e => console.log(e));

    });
  }
  componentWillUnmount() {
    window.Snipcart.unsubscribe('page.validating');
    window.Snipcart.unsubscribe('authentication.success');
  }
  showDropdown = () => {

    if (this.state.dropdownClass === '') {
      this.setState({
        dropdownClass: 'show'
      });
    } else {
      this.setState({
        dropdownClass: ''
      });
    }
  }

  logout = () => {
    window.Snipcart.api.user.logout();
    this.setState({
      logout: true
    })
  }
  render() {

    let user = undefined;
    if (typeof window !== 'undefined') {
      if (typeof window.Snipcart.api !== 'undefined')
        user = window.Snipcart.api.user.current();
    }
    return (
      <NavButtonsWrapper>
        <IoIosCart className="cart icon snipcart-checkout" />



        {
          typeof user !== "undefined" ? (
            <div className="my-account" >
              <span>{user.email}</span>

              <IoIosArrowDown className=" icon " />
              <ul className={`my-account-dropdown ${this.state.dropdownClass}`}>
                <li><span className="snipcart-user-profile ripple">Orders</span></li>
                <li><span className="ripple" onClick={this.logout}>Logout</span></li>
              </ul>
            </div>) : (<span className="snipcart-user-profile">
              Login & Signup
        </span>)
        }
      </NavButtonsWrapper>
    )
  }
}



const NavButtonsWrapper = styled.div`
.icon{
    font-size: 1.6875rem;
    color: #fff;
    cursor: pointer;
}

  position: absolute;
  right: 15px;
  display: flex;
    align-items: center;


@media (min-width:768px) {
  position: static;
  display: flex;
  align-items: center;
  .icon{
    color: ${colors.mainOrange};

  }
  
}

.snipcart-user-profile{
  cursor: pointer;

}
.my-account{
  position: relative;
  cursor: pointer;
  .icon{
    position: absolute;
    right: -20px;
    font-size: 1.2rem;
  }
  margin: 0 0.625rem;

}
.my-account-dropdown{
  
  position: absolute;
  
    width: 120%;
    box-shadow: 1px 1px 4px 1px grey;
    text-align: center;
    bottom: -70px;
    background: #fff;
    color: #444;
    display: none;
    ${transDefault};
    li{
      padding:5px 0;
      border-bottom: 1px solid #e1e1e1;
      span{
        display:inline-block;
        width:100%;
      }
    }
}
.my-account:hover .my-account-dropdown{
  display:block;
}
`;

