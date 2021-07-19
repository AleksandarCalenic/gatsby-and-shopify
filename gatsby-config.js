require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages'
      }
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'zadatka-shop',
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
        includeCollections: ["shop"],
        password: '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',
        storeUrl: 'danijelajs.myshopify.com'
      }
    }
  ]
}