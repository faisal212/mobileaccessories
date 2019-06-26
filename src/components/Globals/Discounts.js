import React, { Component } from 'react'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Discount from './Discount';
import axios from 'axios';
import { getCookie } from '../../utils/utils';
export default class Discounts extends Component {
    state={
        discounts: [],
        selectedWallet: undefined
    };
   
    componentDidUpdate(prevProps){
      const session =getCookie('snipcart_auth_cookie');
      if(this.props.callDiscounts !== prevProps.callDiscounts && session !== ''   ){
      this.getDiscountApi(session).then(response => {
            const newdiscounts = this.getDiscounts(response.data.wallets);
            window.wallets = newdiscounts;
            this.setState({
              discounts: newdiscounts
            })
          }).catch(e => console.log(e));
      }       
    }
    getDiscountApi(session){
     return axios.get("/.netlify/functions/getdiscount", {
        params: {
           session : session
        } 
      }
      )
    }
    getDiscounts(discounts){
      const newdiscounts = discounts.reduce((pv,cv,ci) => {
          let obj = {
              value: cv.code,
              label: cv.price  + ' rupees discount'
          }
          pv.push(obj);
          return pv;
      }, []);  
      return newdiscounts;
    }
    componentDidMount(){
      if(typeof window.wallets  !== 'undefined'){
        
        const selectedWallet = typeof window.selectedWallet  !== 'undefined' ? window.selectedWallet : undefined;
        this.setState({
          discounts: window.wallets,
          selectedWallet: selectedWallet
        })
      }else{
        
        const session =getCookie('snipcart_auth_cookie');
        if(session !== ''){
          this.getDiscountApi(session).then(response => {
              console.log(response)
              const newdiscounts = this.getDiscounts(response.data.wallets);
              window.wallets = newdiscounts;
              const selectedWallet = typeof window.selectedWallet  !== 'undefined' ? window.selectedWallet : undefined;
              this.setState({
                discounts: newdiscounts,
                selectedWallet: selectedWallet
              })
            }).catch(e => console.log(e));
        }        
      }
    }

    selectDiscount = (e) => {
      window.selectedWallet = e;
      this.setState({
        selectedWallet: e
      });
    }
    render() {
        return (
            <PureModal
                header="Discounts"
                onClose={() => {
                    this.props.showModal();
                }}
                isOpen={this.props.modalOpen}
                ref="modal"
                width="290px"
            >
                 <Discount items = {this.state.discounts} selectedWallet={this.state.selectedWallet} selectDiscount={this.selectDiscount}/>
            </PureModal>
        )
    }
}



