import { Link } from "gatsby";
import React, { useState, useRef } from "react";
import Layout from "../components/UI/Layout";
import * as classes from '../style/login.module.css';

const Login = () => {

    const [login, setLogin] = useState(true);
    const name = useRef();
    const lastName = useRef();

    const submitHandler = event => {
        event.preventDefault();
        setLogin(false);

        const nameValue = name.current.value;
        const lastNameValue = lastName.current.value;
        console.log(nameValue, lastNameValue, login);
    };

    return ( 
        <section>
            <Layout>
                <form className={classes.form} onSubmit={submitHandler}>
                    <label className={classes.form__label} htmlFor="name">First Name</label>
                    <input className={classes.form__input} ref={name} type="text" name="name" id="name" required />
                    <label className={classes.form__label} htmlFor="lastName">Last Name</label>
                    <input className={classes.form__input} ref={lastName} type="text" name="lastName" id="lastName" />
                    <Link to='/products'>
                        <button className={classes.form__btn} type='button'>Login</button>
                    </Link>
                </form>
            </Layout>
        </section>
     );
}
 
export default Login;