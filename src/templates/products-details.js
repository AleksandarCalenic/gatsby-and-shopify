import React, { useState, useEffect, useContext, useCallback } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import NumericInput from "../components/NumericInput";
import AddToCart from "../components/AddToCart";
import { StoreContext } from "../context/shopContext";

import * as classes from '../style/products-details.module.css';
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const ProductDetails = ({ data: { product } }) => {

    const { client } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(1);
    const { title, description, variants: [initialVariant] } = product;
    const [variant, setVariant] = useState({ ...initialVariant });
    const productVariant = client.product.helpers.variantForOptions(product, variant) || variant;
    const [available, setAvailable] = useState(productVariant.availableForSale);

    const { price } = product.variants[0];
    const { gatsbyImageData } = product.images[0];

    const checkAvailablity = useCallback((productId) => {
      client.product.fetch(productId)
      .then((fetchedProduct) => {
        const result = fetchedProduct?.variants.filter((variant) => variant.id === productVariant.storefrontId) ?? [];
        if (result.length > 0) {
          setAvailable(result[0].available);
        }
      });
    }, [productVariant.storefrontId, client.product, product.storefrontId]);

    useEffect(() => {
      checkAvailablity(product.storefrontId);
    }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])


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
                  <div>
                    <NumericInput
                      onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                      onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                      onChange={(event) => setQuantity(event.currentTarget.value)}
                      value={quantity}
                      min="1"
                      max="20"
                      className={classes.productDetails__num}
                    />
                    <AddToCart 
                    available={available}
                    variantId={productVariant.storefrontId}
                    quantity={quantity} />
                </div>
              </div>
          </div>
          <Footer />
        </section>
     );
};
 
export default ProductDetails;

export const query = graphql`
  query ($slug: String) {
    product: shopifyProduct(handle: {eq: $slug}) {
      title
      description
      productType
      featuredImage {
          gatsbyImageData
      }
      variants {
        price
        storefrontId
        availableForSale
        title
        selectedOptions {
          name
          value
        }
      }
      storefrontId
      images {
        gatsbyImageData
      }
      shopifyId
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;