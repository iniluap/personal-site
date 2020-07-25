/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/personal-site",
  siteMetadata: {
    title: `Paulina Sędłak-Jakubowska`,
    description: `Personal page of Paulina Sędłak-Jakubowska, frontend developer`,
    author: `iniluap`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#1c544D`,
        theme_color: `#1c544D`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/icon.svg`, // This path is relative to the root of the site.
      },
    }
  ]
};
