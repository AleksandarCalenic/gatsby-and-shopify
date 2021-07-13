import React from "react";

import * as classes from '../style/error.module.css';

const Error = () => {
    return ( 
        <section className={classes.error}>
            <h3>ERROR!</h3>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </section>
     );
}
 
export default Error;