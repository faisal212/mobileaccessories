/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="dns-prefetch"
            key="dns-prefetch-snipcart-cdn"
            href="https://cdn.snipcart.com"
            crossorigin
        />,
        <link
            rel="preconnect"
            key="preconnect-snipcart-app"
            href="https://app.snipcart.com"
            crossorigin
        />,
        <link
            rel="dns-prefetch"
            key="dns-prefetch-images-cdn"
            href="https://images.ctfassets.net"
            crossorigin
        />
    ]);
};