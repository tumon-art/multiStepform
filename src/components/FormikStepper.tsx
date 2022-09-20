import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
import { object } from "yup";
import React, { useState } from "react";
import styles from "./FormikStepper.module.scss";

interface Prop extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

export function FormikStepper({ children, ...props }: Prop) {
  const [step, setStep] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const stepDec = () => {
    if (step > 0) setStep((p) => p - 1);
  };
  const stepInc = () => {
    if (step < childrenArray.length - 1) setStep((p) => p + 1);
  };
  return (
    <Formik
      {...props}
      onSubmit={(values, helpers) => {
        if (isLastStep()) {
          console.log("if");
          props.onSubmit(values, helpers);
        } else {
          console.log("else");

          setStep((p) => p + 1);
        }
      }}
    >
      <Form autoComplete="off" className={styles.form}>
        {currentChild}
        <div className={styles.btnHold}>
          <button type="button" onClick={stepDec}>
            Back
          </button>
          <button type="submit"> {isLastStep() ? "Save" : "Next"}</button>
        </div>
      </Form>
    </Formik>
  );
}
