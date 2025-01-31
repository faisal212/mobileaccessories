import React from 'react'

export default function ProductReviews({product}) {
    let pathname = '';

  if(typeof window !== 'undefined'){
    pathname = window.location.pathname;
  }
    return (
        <div className="yotpo yotpo-main-widget"
            data-product-id={product.id}
            data-price={product.price}
            data-currency="Pkr"
            data-name={product.title}
            data-url={`https://www.bulkpanda.pk${pathname}`}
            data-image-url={product.featureImage.fixed.src}
            data-description={product.description.description.toString()}>
        </div>
    )
}
