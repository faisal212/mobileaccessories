
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

let warning = false

export const onRenderBody = ({ setPostBodyComponents }) => {
	let options = Object.assign({
		apiKey: process.env.GATSBY_SNIPCART_API,
		autopop: true,
		js: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
		jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
		styles: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
	})
	if(!options.apiKey){
		if (!warning) {
            warning = true
			console.log('No Snipcart API key found')
		}
		return
	}

	const components = [
		<script  key='snipcartJs' defer src={options.js} id="snipcart" data-api-key={options.apiKey} data-autopop={options.autopop}></script>
		]
	if(options.jquery){
		components.unshift(<script defer  key='snipcartJquery' src={options.jquery}></script>)
	}
	if (options.styles){
		components.push(<link   key='snipcartStyle' href={options.styles} type="text/css" rel="stylesheet" />)
	}

	return setPostBodyComponents(components)
}


export const wrapRootElement = ({element}) => (
	<User>
		<BulkPanda>
		  {element}
		</BulkPanda>
	</User>
)