import {
  FormikErrors,
  FormikTouched,
  FormikHandlers,
} from "formik";

/**
 * The full form data structure across all steps.
 */
export type FormValues = {
  FirstName: string;
  LastName: string;
  IDType: string;
  PIN: string;
  confirmPIN: string;
  IDCardNumber: string;
  email: string;
  PhoneNumber: string;
  password: string;
  confirmPassword: string;
  emailOTP: string; 
  phoneOTP: string;
  // for verification step

};

/**
 * Common props passed to each Step component.
 * They all share Formik props + navigation handlers.
 */
export type StepProps = {
  step: number;
  totalSteps?: number;
  handleBack?: ()=> void;
  handlePreviousScreen?: () => void;
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  handleSubmit: () => void;
  setFieldValue: (
    field: keyof FormValues,
    value: any,
    shouldValidate?: boolean
  ) => void;
};
