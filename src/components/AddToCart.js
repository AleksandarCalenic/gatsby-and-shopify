import React, { useContext } from "react";
import { Link } from "gatsby";
import { StoreContext } from "../context/shopContext";
import * as classes from './AddToCart.module.css';

const AddToCart = ({ variantId, quantity, available, ...props }) => {

    const { addVariantToCart } = useContext(StoreContext);

    function addToCart(e) {
        e.preventDefault();
        addVariantToCart(variantId, quantity);
    };

    return ( <div className={classes.addToCart}>
                <Link to='/products'>
                    <button className={classes.btn} type='submit'>Back</button>
                </Link>
                <button
                    type="button"
                    onClick={addToCart}
                    disabled={!available}
                    {...props}
                    >
                    {available ? "Add to Cart" : "Out of Stock"}
                </button>
            </div> );

};
 
export default AddToCart;
