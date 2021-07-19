import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from "../../context/shopContext";

import * as classes from './NavBar.module.css';

const NavBar = () => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const { checkout } = useContext(StoreContext);

    const btnClasses = `${btnIsHighlighted ? classes.bump : ''}`;

    const { lineItems } = checkout;

    const order = lineItems.reduce((acc, val) => {
      const sum = acc + val.quantity;
      return sum
    }, 0)


    const numberOfOrder = order > 0;

    const orderSpan = <span className={classes.numer__order}>{order}</span>;

    useEffect(() => {
        if (order === 0) {
          return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
          setBtnIsHighlighted(false);
        }, 300);
    
        return () => {
          clearTimeout(timer);
        };
      }, [order]);

    return ( 
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
            <Link className={classes.nav__link} to='/cart'>
                <button className={btnClasses}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {numberOfOrder && orderSpan}
                </button>
            </Link>
        </nav>
     );
}
 
export default NavBar;