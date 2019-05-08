import React from 'react'
import styled from 'styled-components';
export default function SectionHeading({title}) {
  return (
    <SectionHeadingWrapper>
        <h2>{title}</h2>
    </SectionHeadingWrapper>
  )
}
const SectionHeadingWrapper = styled.div`
   padding: 4.25rem 0  2.5rem 0;
   h2 {
       text-align: center;
       font-size: 1.875rem;
       position: relative;
       font-weight: 300;
       display: flex;
        flex: 1;
        align-items: center;
    }
   }
   h2:before, h2:after{
    height: 1px;
    content: '';
    display: block; 
    margin: 0 auto;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #e0e0e0;
    margin: 0 auto;
    flex: 1;
    margin: 0 5%;;
   }
   h2:before{
       left: 3%;
   }
   h2:after{
       right: 3%;
   }
`;