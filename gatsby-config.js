require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Mobile Accessories Shop in pakistan`,
    description: `This ecommerce store is use to sell mobile accessories.`,
    author: `@faisal`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-v2-plugin-page-transitions',
      options: {
        transitionTime: 250
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`,`400`,`500`, `700`]
          },
          {
            family: `Lato`,
            variants: [`300`,`400`,`600`,`700`]
          },
          {
            family: `Roboto`,
            variants: [`300`,`400`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mobile Accessories",
        short_name: "MA",
        start_url: "/",
        background_color: "#FF6709",
        theme_color: "#FF6709",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
      },

    },
    'gatsby-plugin-offline',

  ],
}
