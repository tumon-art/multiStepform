import { Formik, Form, FormikConfig, FormikValues } from "formik";
import React from "react";
import useStore from "../store/mainStore";
import styles from "./FormikStepper.module.scss";
import ProgressBar from "./ProgressBar";

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

  console.log(currentChild);
  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const stepDec = () => {
    if (step > 0) setStep(step - 1);
  };

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
