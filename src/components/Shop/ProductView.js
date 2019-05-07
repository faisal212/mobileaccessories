import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
import Img from "gatsby-image"
import {colors,robotoFont} from '../../utils/styles';


export default function ProductView({item}) {
  return (
    <ProductViewWrapper>
    <Link to='/' className="link">
    <Img fluid={item.featureImage.fluid} className="product-img"/>
      <div className="inner-product-header">
        <h2>{item.title}</h2>
        <span className="price">Rs {item.price.toLocaleString()}</span>
        {
          (item.colors !== null) && (
            <ul class="colors">
              {
                item.colors.map((color) => (
                  <li key={item.id + color} style={{background: color}}></li>
                ))
              }
            </ul>
          )
        }
      </div>
    </Link>
  </ProductViewWrapper>
  )
}

const ProductViewWrapper = styled.div`
.link {
  display: block;
}
background: #fff;
border: 1px solid #e1e1e1;
.product-img{
  border-bottom :  1px solid #e1e1e1;
}
.inner-product-header {
  padding: 0.625rem 0.9375rem 0.9375rem;
  position: relative;
}
h2{
  font-size: 13px;
  ${robotoFont};
  color: ${colors.darkBlack};
  font-weight:400;
}
.price {
  font-weight: 600;
  font-size: 0.9375rem;
  color: ${colors.mainOrange};

}
.colors {
    list-style: none;
    display: inline-flex;
    right: 0.9375rem;
    top: 0.625rem;
    position: absolute;
    text-align: right;
    justify-content: flex-end;
}
.colors li {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
`;