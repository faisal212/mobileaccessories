

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="dns-prefetch"
            key="dns-prefetch-snipcart-cdn"
            href="https://cdn.snipcart.com"
            crossorigin="crossorigin"
        />
    ]);
};

