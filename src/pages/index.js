import React from "react"
import  'react-modal-video/css/modal-video.min.css';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel,StarProducts,Videos } from "../components/Home";
const IndexPage = ({ data }) => (
  <Layout isHome={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} isHome={true} />
    <Carousel items={data.carousel} />
    <StarProducts items ={data.starProducts}/>
    <Videos items={data.videos}/>
  </Layout> 
)

export const query = graphql`
  {
    carousel:  allContentfulMainCarousel {
    edges {
      node {  
        id
      	image{
          fluid(maxWidth: 1920){
            ...GatsbyContentfulFluid_withWebp
            ...GatsbyContentfulFluid

          }
        }
      }
    }
   }
    starProducts:  allContentfulStarProducts {
      edges {
        node { 
          id
          featureImage{
            fluid(maxWidth:600){
              ...GatsbyContentfulFluid_withWebp
              ...GatsbyContentfulFluid
            }
          }
          alignmentPosition
          product{
            title
            price
          }
        
        }
      }
    }

    videos:   allContentfulVideos {
        edges {
          node {
            id
            title
            thumbnail {
              fluid(maxWidth: 387) {
                ...GatsbyContentfulFluid_withWebp
                ...GatsbyContentfulFluid

              }
            }
            videoId
          }
      }
    }
  } 
`;
export default IndexPage
