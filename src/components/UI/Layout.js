import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { StaticImage } from "gatsby-plugin-image";
import '../../style/global.css';

const Layout = (props) => {

    return ( 
        <div>
            <StaticImage src="https://cdn.pixabay.com/photo/2016/03/09/09/22/store-1245758_960_720.jpg" alt="A lot of furnitures" width={1900} />
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
     );
}
 
export default Layout;