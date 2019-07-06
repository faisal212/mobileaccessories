import React from 'react'
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import ListHeading from '../components/Shop/ListHeading';
import { Container, Row, Col } from 'react-grid-system';
import ProductView from '../components/Shop/ProductView';
import MainTransition from '../components/Globals/MainTransition';

export default class category extends React.Component {
  state = {
    data: {
      node: {
        title: '',
        products: [
          {
            title: '',
            price: ''
          }
        ]
      }

    }
  };


  render() {
    const data = this.props.data.allContentfulMobile.edges[0];
    return (
    <MainTransition>
        <Layout isHome={false}>
        <SEO title={`${data.node.title} Mobile cases`} keywords={[`categories`, `cases`, `mobile accessories`,'mobileaccessories' ,`${data.node.title}` ]} />

        <ListHeading title={data.node.title} />
        <Container style={{padding: '50px 0'}} className="category">
          <Row>

            {
                data.node.products !== null ? 
                data.node.products.map((product) => (
                  <Col xs={6} sm={3} key={product.id} >
                      <ProductView parentslug={`${data.node.category.slug}/mobiles/${data.node.slug}`} item={product}/>
                  </Col>
                 ))
                : ('')
            }

          </Row>
        </Container>
      </Layout>
    
    </MainTransition>
    )
  }
}

export const query = graphql`
  query( $id: String!){
   allContentfulMobile(filter : {id: {eq: $id}}) {
    edges {
      node {
        id
        title
        slug  
        category{
            slug
        }    
        products {
          id
          title
          price
          slug
          featureImage{ 
            fluid(maxWidth:450){
              ...GatsbyContentfulFluid_withWebp
            }
          }
          colors
          
        }
      }
    }
  }

  } 
`;