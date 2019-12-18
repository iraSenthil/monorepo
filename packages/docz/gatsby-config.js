module.exports = {
  plugins: [
    'gatsby-theme-docz',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@modernhire/component`]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
