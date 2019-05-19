

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
            key="preconnect-snipcart-cdn"
            href="https://cdn.snipcart.com"
            crossorigin='anonymous'
        />,
        <link
        rel="preconnect"
        key="preconnect-contentful-images"
        href="https://images.ctfassets.net"
        crossorigin='crossorigin'
    />
    ]);
};

