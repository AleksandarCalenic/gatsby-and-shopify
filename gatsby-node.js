const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
     {
        allShopifyProduct {
            nodes {
              id
              title
              featuredImage {
                gatsbyImageData
              }
              variants {
                price
              }
              handle
            }
          }
      } 
    `);

    data.allShopifyProduct.nodes.forEach(node => {
        actions.createPage({
            path: '/products/' + node.handle,
            component: path.resolve(`./src/templates/products-details.js`),
            context: { slug: node.handle }
        })
    });
}
