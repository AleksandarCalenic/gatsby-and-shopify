import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import * as classes from '../style/products-details.module.css';
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

export const query = graphql`
query MyQuery($slug: String) {
    shopifyProduct(handle: {eq: $slug}) {
        featuredImage {
            gatsbyImageData
          }
          variants {
            price
          }
          title
          description
          images {
            gatsbyImageData
          }
        }
  }
`;

const ProductDetails = ({ data }) => {

    const { description, title } = data.shopifyProduct;
    const { price } = data.shopifyProduct.variants[0];
    const { gatsbyImageData } = data.shopifyProduct.images[0];

    return ( 
        <section>
          <Header />
          <div className={classes.productDetails}>
              <div className={classes.productDetails__img}>
                  <GatsbyImage alt='Product' image={gatsbyImageData} />
              </div>
              <div className={classes.productDetails__desc}>
                  <h2 className={classes.productDetails__title}>{title}</h2>
                  <p className={classes.productDetails__text}>{description}</p>
                  <p className={classes.productDetails__price}>
                    <span >Price: </span>
                    <span>{`${price}$`}</span>
                  </p>
                  <button className={classes.productDetails__btn} type='button'>Back</button>
              </div>
          </div>
          <Footer />
        </section>
     );
}
 
export default ProductDetails;
