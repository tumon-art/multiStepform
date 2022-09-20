import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
import { object } from "yup";
import React, { useState } from "react";

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
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="email" />
          </div>
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
  const [step, setStep] = useState(0);
  const childrenArray = React.Children.toArray(children);
  console.log(childrenArray);
  const currentChild = childrenArray[step];

  const stepDec = () => {
    setStep((p) => p - 1);
  };
  const stepInc = () => {
    setStep((p) => p + 1);
  };
  return (
    <Formik {...props}>
      <Form autoComplete="off" className={styles.form}>
        {currentChild}

        <div className={styles.btnHold}>
          <button type="button" onClick={stepDec}>
            Back
          </button>
          <button type="button" onClick={stepInc}>
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
}
