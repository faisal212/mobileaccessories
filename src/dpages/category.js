import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";
import ListHeading from '../components/Shop/ListHeading';
import { Container, Row, Col } from 'react-grid-system';
import ProductView from '../components/Shop/ProductView';
import Img from "gatsby-image"

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

    },
    imageData: null
  };

  constructor(props) {
    super(props);
  
  }

  render() {
    const data = this.props.data.allContentfulCategory.edges[0];
    const {imageData} = this.state;
    return (
      <Layout isHome={false}>
        <ListHeading title={data.node.title} />
        <Container style={{padding: '50px 0'}}>
          <Row>
              {data.node.products.map((product) => (
               <Col sm={3} key={product.id} >
                   <ProductView  item={product}/>
               </Col>
              ))}
           
          </Row>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query( $id: String!){
   allContentfulCategory(filter : {id: {eq: $id}}) {
    edges {
      node {
        id
        title      
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