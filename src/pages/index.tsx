import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field } from "formik";
import { object } from "yup";

interface MyFormValues {
  name: string;
  email: string;
}

const Home: NextPage = () => {
  const initialValues: MyFormValues = { name: "", email: "" };

  return (
    <div>
      <Head>
        <title>React Form</title>
        <meta name="description" content=" A Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />

        <main className={styles.main}>
          <h1 className={styles.h1}> Fill The Form </h1>

          <Formik
            validationSchema={object}
            initialValues={initialValues}
            submit={() => {}}
          >
            <Form autoComplete="off" className={styles.form}>
              <label htmlFor="name">Name</label>

              <Field
                /* className={styles.field} */
                id="name"
                name="name"
                placeholder="name"
              />

              <label htmlFor="email">Email</label>
              <Field
                /* className={styles.field} */
                id="email"
                name="email"
                placeholder="email"
              />
            </Form>
          </Formik>
        </main>
      </Head>
    </div>
  );
};

export default Home;
