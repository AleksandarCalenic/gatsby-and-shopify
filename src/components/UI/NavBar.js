import React from "react";
import { Link } from "gatsby";

import * as classes from './NavBar.module.css';

const NavBar = () => {
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
        </nav>
     );
}
 
export default NavBar;