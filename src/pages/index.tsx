import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";
import { FormikStepper } from "../components/FormikStepper";
import Image from "next/image";

interface MyFormValues {
  name: string;
  email: string;
  phone: number;
  city: string;
  country: string;
  zip: string;
}

const Home: NextPage = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: 0,
    city: "",
    country: "",
    zip: "",
  };

  const themeToggle = () => {
    const body = document.getElementsByTagName("BODY")[0] as HTMLElement;
    body.classList.toggle("dark");
  };
  return (
    <div>
      <Head>
        <title>React Form</title>
        <meta name="description" content=" A Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <svg
          onClick={themeToggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386
              6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591
              1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
              12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        <h1 className={styles.h1}> Fill The Form </h1>

        <FormikStepper
          validationSchema={yup.object({
            // name: yup.string().required("Name is required"),
            // email: yup.string().email().required(),
            // country: yup.string().required("Enter Your Country"),
            // zip: yup.string().required("Enter Your Zip Code"),
          })}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
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
              <ErrorMessage component="mark" name="email" />
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
              <ErrorMessage component="mark" name="city" />
            </span>
          </div>

          <div className={styles.inputHold}>
            <span>
              <label htmlFor="country">Country</label>
              <Field id="country" name="country" placeholder="country" />
              <ErrorMessage component="mark" name="country" />
            </span>
            <span>
              <label htmlFor="zip">Zip</label>
              <Field id="zip" name="zip" placeholder="zip" />
            </span>
          </div>
        </FormikStepper>
      </main>
    </div>
  );
};

export default Home;
