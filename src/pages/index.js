import React from "react"
<<<<<<< HEAD
import ModalVideoCss from  'react-modal-video/css/modal-video.min.css';
=======
import ModalVideo from 'react-modal-video/css/modal-video.min.css';
>>>>>>> 016ded21371f0fb5c523e351aab6af62c3b3a093
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel,StarProducts,Videos } from "../components/Home";
const IndexPage = ({ data }) => (
  <Layout isHome={true}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
          fluid{
            ...GatsbyContentfulFluid_tracedSVG
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
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
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
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            videoId
          }
      }
    }
  } 
`;
export default IndexPage
