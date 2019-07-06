import React from 'react'
import styled from 'styled-components';
import { colors, robotoFont } from '../../../utils/styles';
import BuyButton from '../../Globals/Buttons/BuyButton';
import Dropdown from 'react-dropdown'
import { navigate } from "gatsby"



function getMobiles(mobiles,slug){
    const newdiscounts = mobiles.reduce((pv,cv,ci) => {
        let obj = {
            value: cv.slug,
            label: cv.title
        }
        const data = cv.products.filter(data => data.slug ===slug );
        if(data.length){
            pv.push(obj);
        }
        return pv;
    }, []);  
    return newdiscounts;
}

export default function Summary({ product, mobiles }) {
    const description = product.description.description.split('\n');
    const mobileData = getMobiles(mobiles,product.slug);
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
           <Dropdown options={mobileData}  onChange={e => navigate(`/${mobiles[0].category.slug}/mobiles/${e.value}/products/${product.slug}`)}  placeholder="Change Mobile" />

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