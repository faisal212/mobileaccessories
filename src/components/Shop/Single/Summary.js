import React from 'react'
import styled from 'styled-components';
import { colors, robotoFont } from '../../../utils/styles';
import BuyButton from '../../Globals/Buttons/BuyButton';
export default function Summary({ product }) {
    const description = product.description.description.split('\n');
    return (
        <SummaryWrapper>
            <h1>{product.title}</h1>
            <p className="price">Rs {product.price.toLocaleString()}</p>
            <p className="description">
                {description.map((item, i) => (
                    <span key={item + i}>{item}</span>
                ))}
            </p>
           <BuyButton product={product}/>
        </SummaryWrapper>
    )
}

const SummaryWrapper = styled.div`
background: #F6F6F6;
padding: 15px 15px;
 
@media(min-width:768px){
    padding: 3rem;
    min-height: 100%;
    h2{
        font-size: 2.1175rem;

    }
    
}
h1{
    font-size: 1.5rem;
    color: ${colors.darkBlack};
    ${robotoFont};
    font-weight: 400;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.9375rem;
}
.price {
  font-weight: 600;
  font-size: 0.9375rem;
  color: ${colors.mainOrange};
  margin: 0.8125rem 0 2.1875rem 0;

}
.description{
    color: ${colors.lightBlack};
    line-height: 1.3344rem;
}
.description span{
    display: block;
}
`;