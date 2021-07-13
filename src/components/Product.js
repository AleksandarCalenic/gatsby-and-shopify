import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as classes from './Product.module.css';


const Product = (props) => {

    const price = `${props.price}$`;

    return ( 
        <div className={classes.product}>
            <div className={classes.product__imgContainer}>
                <Link to={props.id}>
                    <GatsbyImage alt='Product' image={props.img} />
                </Link>
            </div>
            <div className={classes.product__desc}>
                <p className={classes.product__name}>{props.title}</p>
                <p className={classes.product__price}>{price}</p>
            </div>
        </div>
     );
}
 
export default Product;