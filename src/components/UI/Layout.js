import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../../style/global.css';

const Layout = (props) => {
    return ( 
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;