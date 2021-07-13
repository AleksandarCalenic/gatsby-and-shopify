import React from "react";
import Layout from "../components/UI/Layout";
import * as classes from '../style/login.module.css';

const Login = () => {

    const submitHandler = event => {
        event.preventDefault();
    };

    return ( 
        <section>
            <Layout>
                <form className={classes.form} onSubmit={submitHandler}>
                    <label className={classes.form__label} htmlFor="name">First Name</label>
                    <input className={classes.form__input} type="text" name="name" id="name" required />
                    <label className={classes.form__label} htmlFor="lastName">Last Name</label>
                    <input className={classes.form__input} type="text" name="lastName" id="lastName" />
                    <button className={classes.form__btn} type='button'>Login</button>
                </form>
            </Layout>
        </section>
     );
}
 
export default Login;