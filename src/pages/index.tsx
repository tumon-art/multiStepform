import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { FormikStepper } from "../components/FormikStepper";

interface MyFormValues {
  name: string;
  email: string;
  phone: number;
  city: string;
}

const Home: NextPage = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: 0,
    city: "",
  };

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
          validationSchema={yup.object({
            name: yup.string().required("Name is required"),
            // email: yup.string().email().required(),
          })}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <div className={styles.inputHold}>
            <span>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="name" />
              <ErrorMessage component="mark" name="name" />
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="email" />
            </span>
          </div>

          <div className={styles.inputHold}>
            <span>
              <label htmlFor="phone">Phone</label>
              <Field
                id="phone"
                name="phone"
                type="number"
                placeholder="number"
              />
            </span>
            <span>
              <label htmlFor="city">City</label>
              <Field id="city" name="city" placeholder="city" />
            </span>
          </div>
        </FormikStepper>
      </main>
    </div>
  );
};

export default Home;
