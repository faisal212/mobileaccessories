

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            key="preload-snipcart-cdn"
            href="https://cdn.snipcart.com"
            crossOrigin='anonymous'

        />
    ]);
};

