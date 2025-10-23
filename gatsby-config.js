module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Paulina Sędłak-Jakubowska`,
    description: `Personal page of Paulina Sędłak-Jakubowska, senior frontend engineer and accessibility advocate.`,
    author: `Paulina Sędłak-Jakubowska`,
    siteUrl: `https://paulina.s-j.me`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-cname',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        short_name: 'P. Sędłak-Jakubowska',
        name: 'Paulina Sędłak-Jakubowska',
        icon: 'src/images/icon.svg',
        background_color: `#1c544D`,
        theme_color: `#1c544D`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    `gatsby-plugin-fontawesome-css`,
  ],
};
