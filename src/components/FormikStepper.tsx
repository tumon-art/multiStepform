import { Formik, Form, FormikConfig, FormikValues } from "formik";
import React from "react";
import useStore from "../store/mainStore";
import styles from "./FormikStepper.module.scss";
import ProgressBar from "./ProgressBar";
import emailjs from "@emailjs/browser";

interface Prop extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

// === Formik Step
export function FromikStep({ children }: FormikStepProps) {
  return <> {children} </>;
}

// === Formik Steper
export function FormikStepper({ children, ...props }: Prop) {
  const { step, setStep } = useStore();

  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];

  const currentChild = childrenArray[
    step
  ] as React.ReactElement<FormikStepProps>;

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const stepDec = () => {
    if (step > 0) setStep(step - 1);
  };

  const sendEmail = (e: any) => {

    emailjs
      .send(
        "service_7wis4fb",
        "template_y23h5qu",
        {
          from_name: "tumonkhn@gmail.com",
          to_name: "mofakhar0@gmail.com",
          reply_to: "tumonkhn@gmail.com",
          message_html: "I got nothibg",
        },
        "Ol-y_QPU3KoH7CeMf"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };


setTimeout(() => {
  sendEmail('nothing')
}, 1000);
  return (
    <>
      <ProgressBar childrenArray={childrenArray} />
      <Formik
        validationSchema={currentChild.props.validationSchema}
        {...props}
        onSubmit={(values, helpers) => {
          if (isLastStep()) {
            props.onSubmit(values, helpers);
          } else {
            setStep(step + 1);
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
    </>
  );
}
