
// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/ssr-apis/
//  */

// import React from "react";

// export const onRenderBody = ({ setHeadComponents }) => {
//     setHeadComponents([
//         <link
//         rel="preconnect"
//         key="preconnect-snipcartapp"
//         href="https://app.snipcart.com"
        
//     />,
//         <link
//             rel="preconnect"
//             key="preconnect-snipcart-cdn"
//             href="https://cdn.snipcart.com"
//             crossorigin='anonymous'
//         />
     
//     ]);
// };


import React from 'react'
import BulkPanda from "./src/components/Globals/BulkPanda";
import User from './src/components/Globals/User';




export const wrapRootElement = ({element}) => (
	<User>
		<BulkPanda>
		  {element}
		</BulkPanda>
	</User>
)