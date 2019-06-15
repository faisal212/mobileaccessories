import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components';
import  {headingFont,transObject} from '../../utils/styles';
import { Container} from 'react-grid-system';
import {Link} from 'gatsby';

import SectionHeading from '../Globals/SectionHeading';

export default function StarProducts({ items }) {

    const {edges} = items;

    return (
        <Container>
            <SectionHeading title={`Star Products`}/>
          <StarProductsWrapper>
              <div className="left-side equal-height">
                    <StarProductItem node={edges.find(data => data.node.alignmentPosition === 1).node}/>
              </div>
              <div className="right-side equal-height">
                    <StarProductItem node={edges.find(data => data.node.alignmentPosition === 4).node}/>
                    <StarProductItem node={edges.find(data => data.node.alignmentPosition === 2).node}/>
                    <StarProductItem node={edges.find(data => data.node.alignmentPosition === 3).node}/>
              </div>
            
          </StarProductsWrapper>
        </Container>
    )
}

const StarProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 300px;
    justify-content: space-between;
  
    @media(min-width:768px){
        .equal-height{
            flex-direction: column;
            width: calc(50%);
        }
        flex-direction: row;

        .left-side .content h3 {
            font-size: 2.5rem;
            word-spacing: -0.25rem;
        }
        .left-side .content p{
            font-size: 2rem;
        }
    }
    .right-side {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }  
    .right-side >.star-item-wrapper {
     flex: 1 0 50%;
     
    }

    .right-side >.star-item-wrapper:first-child {
     flex: 0 1 100%;
     margin-bottom:4px;
    } 
    .star-item-wrapper{
       position: relative;
       display: block;
       cursor: pointer;
       padding-right: 4px;

       ${transObject({type: 'linear'})}
    }
    .star-item-wrapper:hover{
        box-shadow: 0 8px 16px rgba(0,0,0,.18);

    }
    .content{
        position: absolute;
        left: 0%;
        top: 15px;
        left: 25px;
    }
    .content h3{
        font-size: 1.1875rem;
        font-weight: 300;
        @media (max-width:768px){
            font-size: 1rem;

        }
    }

    .content p{
        font-size: 1.3125rem;
        font-family: ${headingFont};
    }
    
`;



 function StarProductItem({node}) {
    //  const namr = ${node.product.category.slug}/products/${node.product.slug}
  return (
      <Link to={`/`} className="star-item-wrapper ripple">
        <Img
          fluid={node.featureImage.fluid}
        />
        <div className="content">
            <h3>{node.product.title}</h3>
            <p>Rs {node.product.price.toLocaleString()}</p>
        </div>
    </Link>


  )
}
 