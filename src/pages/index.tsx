import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  fullName: string;
}

const Home: NextPage = () => {
  const initialValues: MyFormValues = { fullName: "" };

  return (
    <div>
      <Head>
        <title>React Form</title>
        <meta name="description" content=" A Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />

        <main className={styles.main}>
          <h1 className={styles.h1}> Fill The Form </h1>

          <Formik initialValues={initialValues} submit={() => {}}>
            <Form className={styles.form}>
              <label htmlFor="fullName">Full Name</label>

              <Field
                className={styles.field}
                id="fullName"
                name="fullName"
                placeholder="fullName"
              />
            </Form>
          </Formik>
        </main>
      </Head>
    </div>
  );
};

export default Home;
