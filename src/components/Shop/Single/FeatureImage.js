import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import styled from 'styled-components';
export default function FeatureImage({image}) {
  return (
    <FeatureImageWrapper>
      <ReactImageMagnify {...{
      smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: image.fluid.src
      },
      largeImage: {
          src: image.fluid.src,
          width: 780,
          height:780
      },
      enlargedImageContainerClassName: 'large-image-container',
     
      enlargedImagePosition: 'over',
      
      }} />
    </FeatureImageWrapper>
  )
}




const FeatureImageWrapper = styled.div`
min-height: 300px;
`;
