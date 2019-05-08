import React from 'react'
import { Container, Row } from 'react-grid-system';
import Col from '../../utils/ColWrapper';
import SectionHeading from '../Globals/SectionHeading';
import styled from 'styled-components';
import Video from './Video';



export default function Videos({items}) {
  return (
    <VideosWrapper>
      <Container>
        <SectionHeading title="Videos" />
        <Row >

          {items.edges.map(item => (
            <Col xs={4} key={item.node.id} >
              <Video video={item.node}/>
                
            </Col>
          ))}
        </Row>
      </Container>
    </VideosWrapper>
  )
}

const VideosWrapper = styled.div`
`;