module.exports = {
  siteMetadata: {
    title: `Gordy Lanza Portfolio`,
    description: `A personal site for writing x coding x capturing light.`,
    author: `Gordy Lanza`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-breakpoints`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `content/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `content/posts`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
