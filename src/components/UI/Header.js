import { Link } from "gatsby";
import React from "react";
import * as classes from "./Header.module.css";

const Header = () => {
    return ( 
        <header className={classes.header}>
            <img src="./furniture.jpg" alt="A lot of products" />
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;