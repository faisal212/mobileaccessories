import React from 'react'
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import { Navigation } from 'swiper/dist/js/swiper.esm'
import Img from "gatsby-image"

export default function Carousel({ items }) {
  const params = {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0
  }
  return (
    <CarouselWrapper {...params}>
    <Swiper>
    {items.edges.map((data, i) => (
        <div className="swiper-slider" key={i}> 
             <Img
             
              fluid={data.node.image.fluid}
              />
        </div>

     ))}
    </Swiper>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`

`;