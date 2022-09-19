import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field } from "formik";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Form</title>
        <meta name="description" content=" A Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />

        <main className={styles.main}>
          <h1 className={styles.h1}> Fill The Form </h1>
        </main>
      </Head>
    </div>
  );
};

export default Home;
