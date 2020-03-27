module.exports = {
  siteMetadata: {
    title: `Novelship Blog`,
    description: `All Blog related to Sneaker and Streetwear are here..`,
    author: `@novelship`,
  },
  plugins: [
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `WPGraphQL`,
    //     fieldName: `wpgraphql`,
    //     url: `http://localhost:8000/___graphql`,
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        excludedRoutes: ["/wp/v2/users/**", "/wp/v2/settings*"],
        baseUrl: "localhost:10000",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "localhost:10000",
          replacementUrl: "",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
