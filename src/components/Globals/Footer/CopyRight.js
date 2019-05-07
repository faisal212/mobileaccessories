import React from 'react'
import styled from 'styled-components';
import { Container} from 'react-grid-system';

export default function CopyRight() {
  return (
   <CopyRightWrapper>
       <Container>
            <p>Copyright &copy; 2019 Xiaomi. All Rights Reserved -Developed By Selecto Solutions</p>
       </Container>
   </CopyRightWrapper>
  )
}

const CopyRightWrapper = styled.div`
    background: #333;

    padding: 15px 0;
    color: #fff;
    p{
        font-size: 11px;
        font-weight: 400;
    }

`;