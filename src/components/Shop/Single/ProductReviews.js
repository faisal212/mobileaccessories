import React from 'react'

export default function ProductReviews({product}) {
    let pathname = '';

  if(typeof window !== 'undefined'){
    pathname = window.location.pathname;
  }
    return (
        <div class="yotpo yotpo-main-widget"
            data-product-id={product.id}
            data-price={product.price}
            data-currency="PkR"
            data-name={product.title}
            data-url={`https://www.bulkpanda.pk${pathname}`}
            data-image-url={product.featureImage.fixed.src}
            data-description={product.title}>
        </div>
    )
}
