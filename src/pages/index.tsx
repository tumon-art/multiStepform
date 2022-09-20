import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
import { object } from "yup";
import React from "react";

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
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}> Fill The Form </h1>

        <FormikStepper
          validationSchema={object}
          initialValues={initialValues}
          onSubmit={() => {}}
        >
          <Form autoComplete="off" className={styles.form}>
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="email" />
            </div>
          </Form>
        </FormikStepper>
      </main>
    </div>
  );
};

export default Home;

interface Prop extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

export function FormikStepper({ children, ...props }: Prop) {
  const childrenArray = React.Children.toArray(children);
  console.log(childrenArray);
  return (
    <Formik {...props}>
      <Form autoComplete="off" className={styles.form}>
        {children}
      </Form>
    </Formik>
  );
}
