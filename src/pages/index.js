import React from "react";
import Layout from "../components/UI/Layout";
import * as classes from '../style/home.module.css';

export default function Home() {
  return <div>
      <Layout>
        <div className={classes.home}>
          <h1>Welcome to our Shop</h1>
        </div>
      </Layout>
  </div>
}
