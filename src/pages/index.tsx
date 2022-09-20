import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
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

          <FormikStepper
            validationSchema={object}
            initialValues={initialValues}
            submit={() => {}}
          >
            <Form autoComplete="off" className={styles.form}>
              <label htmlFor="name">Name</label>

              <Field id="name" name="name" placeholder="name" />

              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="email" />
            </Form>
          </FormikStepper>
        </main>
      </Head>
    </div>
  );
};

export default Home;

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  return (
    <Formik {...props}>
      <Form autoComplete="off" className={styles.form}>
        {children}
      </Form>
    </Formik>
  );
}
