import React from 'react'
import styled from 'styled-components';
import {colors} from '../../../utils/styles';
export default function BuyButton({product}) {
  const siteUrl = process.env.SITE_DOMAIN;
  return (
    <BuyButtonWrapper
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-name={product.title}
                data-item-price={product.price}
                data-item-url={`https://www.stayclassy.pk/${product.category.slug}/products/${product.slug}`}
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