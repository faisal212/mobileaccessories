

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
        rel="preconnect"
        key="preconnect-snipcartapp"
        href="https://app.snipcart.com"
        crossorigin
    />,
        <link
            rel="preconnect"
            key="preconnect-snipcart-cdn"
            href="https://cdn.snipcart.com"
            crossorigin='anonymous'
        />
     
    ]);
};

