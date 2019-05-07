import React from 'react'
import styled from 'styled-components';
import {Container} from '../../utils/Section';
import {colors,robotoFont} from '../../utils/styles';
export default function ListHeading({title}) {
  return (
    <ListHeadingWrapper>
       <Container>
            <h1 className="main-title">{title}</h1>
       </Container>
    </ListHeadingWrapper>
  )
}

const ListHeadingWrapper = styled.div`
    .main-title{
        font-size: 1rem;
        ${robotoFont};
        font-weight: 400;
        color: ${colors.lightBlack};
        line-height: 2;
    }
    background: ${colors.lightGrey};
    padding: 10px 0;
    border-bottom: 1px solid ${colors.darkGrey};

`;