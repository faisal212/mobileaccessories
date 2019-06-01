import React from 'react'
import Img from 'gatsby-image';
export default function ExtraImages({images}) {
    return (
        <div>
            {images.map((image => (
                <Img key={image.id} fluid={image.fluid}/>
            )))
        }
        </div>
    )
}
