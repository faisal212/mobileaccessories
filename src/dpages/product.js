import React from 'react'
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { Container, Row, Col } from 'react-grid-system';
import FeatureImage from '../components/Shop/Single/FeatureImage';
import Summary from '../components/Shop/Summary';
export default class product extends React.Component {

  state = {
    data: {
      node: {
        title: '',
      }

    }
  };


  render() {
    
    const {node} = this.props.data.allContentfulProducts.edges[0];
    return (
      <Layout isHome={false} className="background-white">
        <SEO title={`${node.title} Mobile cases`} keywords={[`Product`, `cases`, `mobile accessories`, 'mobileaccessories', `${node.title}`]} />
        <div className="background-white">

          <Container>
            <Row>
              <Col sm={6} >
                <FeatureImage image={node.featureImage} />
              </Col>
              <Col sm={6}>
                <Summary product={node}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query( $id: String!){
    allContentfulProducts(filter : {id: {eq: $id}}) {
    edges {
      node {
        id
        slug
        title
        price
        description {
          id
          description
        }
        featureImage {
          fluid(maxWidth: 1024) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        category{
          slug
        }
      }
    }
  }

} 
`;