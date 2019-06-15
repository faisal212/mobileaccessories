import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../utils/styles';
export default function BuyButton({ product }) {

  let pathname = '';

  if(typeof window !== 'undefined'){
    pathname = window.location.pathname;
  }
  return (
    <BuyButtonWrapper
      className="snipcart-add-item"
      data-item-id={product.id}
      data-item-name={product.title}
      data-item-price={product.price}
      data-item-url={`https://www.bulkpanda.pk${pathname}`}
      data-item-image={product.featureImage.fixed.src}
    >
      Buy Now
    </BuyButtonWrapper>
  )
}

const BuyButtonWrapper = styled.button`
background: ${colors.mainOrange};
display: block;
width:100%;
border: none;
cursor: pointer;
color: #fff;
line-height:1;
font-size: 1rem;
padding: 0.9375rem 0;
text-transform: uppercase;
margin-top: 1.5625rem;
`;