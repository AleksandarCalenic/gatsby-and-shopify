import React, { useContext } from 'react';
import { Link } from "gatsby";

import { StoreContext } from "../context/shopContext";
import Layout from '../components/UI/Layout';
import LineItem from '../components/LineItem';
import * as classes from '../style/cart.module.css';

const Cart = () => {

    const { checkout } = useContext(StoreContext);
    const emptyCart = checkout.lineItems.length === 0;

    const tax = checkout?.totalTaxV2?.amount;

    const totalPrice = (Number(checkout?.totalPriceV2?.amount)).toFixed(2);
  
    const handleCheckout = () => {
      window.open(checkout.webUrl)
    }

    return ( 
        <Layout>
            <div className={classes.cart}>
                {emptyCart ? (
                <div>
                    <h1 className={classes.cart__title}>Your cart is empty</h1>
                    <p className={classes.cart__text}>
                    Looks like you haven’t found anything yet. We understand that
                    sometimes it’s hard to chose — maybe this helps:
                    </p>
                    <Link to="/products" className={classes.cart__back}>
                    View our products
                    </Link>
                </div>
                ) : (
                <div className={classes.cart}>
                    <h1 className={classes.cart__title}>Your cart</h1>
                    <table className={classes.table}>
                        <thead className={classes.table__header}>
                            <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty.</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {checkout.lineItems.map((item) => (
                            <LineItem item={item} key={item.id} />
                            ))}
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={classes.table__allPrice}>Taxes</td>
                            <td>{tax}$</td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={classes.table__allPrice}>Shipping</td>
                            <td>Calculated at checkout</td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={classes.table__allPrice}>Total Price</td>
                            <td>{totalPrice}$</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={classes.table__checkout} onClick={handleCheckout}>Checkout</button>
                </div>
                )}
            </div>
        </Layout>
     );
}
 
export default Cart;