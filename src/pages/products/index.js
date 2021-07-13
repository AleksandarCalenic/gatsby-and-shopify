import React, { useState, useEffect } from "react";

import { graphql } from "gatsby";

import Product from "../../components/Product";
import Layout from "../../components/UI/Layout";
import * as classes from '../../style/products.module.css'

export const products = graphql`
  query Products {
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
`

const Products = ({ data }) => {

  const [btnDesabled, setBtnDesabled] = useState(false);
  const [load, setLoad] = useState(10);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(data.allShopifyProduct.nodes);
  }, [])

  if (load === itemList.length) {
    setBtnDesabled(true);
  };

  const loadMoreHandler = () => {
      setLoad(prev => prev + 10);
  }

  const listOfProducts = itemList.slice(0, load).map(product => <Product key={product.id} title={product.title} id={product.handle} img={product.featuredImage.gatsbyImageData} price={product.variants[0].price} />);

    return ( 
        <section>
            <Layout>
                <div className={classes.products}>
                  <h2 className={classes.products__title}>Our Products</h2>
                  <div className={classes.products__list}>
                    {listOfProducts}
                  </div>
                </div>
                {!btnDesabled && <button className={classes.products__btn} type='button' onClick={loadMoreHandler}>Load more</button>}
            </Layout>
        </section>
     );
}
 
export default Products;