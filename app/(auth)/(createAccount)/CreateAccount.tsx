import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
//components
import StepTwo from "@/components/(createAcccount)_Components/step2PhonePIN";
import StepThree from "@/components/(createAcccount)_Components/step3PhoneOTP";
import StepFour from "@/components/(createAcccount)_Components/step4EmailPassword";
import StepFive from "@/components/(createAcccount)_Components/step5EmailOTP";
import StepSix from "@/components/(createAcccount)_Components/step6KYCverification";
import { FormValues } from "@/constants/formValues";
import StepOne from "../../../components/(createAcccount)_Components/step1PersonalInfo";
import { createAccountStyles as styles } from "@/styles/app/(auth)/(createAccount)/CreateAccount";

// ✅ Validation schemas
const stepOneValidation = Yup.object({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  IDType: Yup.string().required("ID Type is required"),
  IDCardNumber: Yup.string().required("ID Card Number is required"),
});

const stepTwoValidation = Yup.object({
  PhoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be a valid number")
    .required("Phone Number is required"),
  PIN: Yup.string()
    .length(5, "PIN must be exactly 5 digits")
    .required("PIN is required"),
  confirmPIN: Yup.string()
    .oneOf([Yup.ref("PIN")], "PINs must match")
    .required("Confirm your PIN"),
});

const stepThreeValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const Phonevalidation = Yup.object({
  phoneOTP: Yup.string()
    .length(6, "Enter 6 digits")
    .required("phoneOTP is required"),
});

const emailPhoneValidation = Yup.object({
  emailOTP: Yup.string()
    .length(6, "Enter 6 digits")
    .required("emailOTP is required"),
});

export default function MultiForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  // ✅ Initial values
  const initialValues: FormValues = {
    FirstName: "",
    LastName: "",
    IDType: "",
    IDCardNumber: "",
    PhoneNumber: "",
    PIN: "",
    confirmPIN: "",
    email: "",
    emailOTP: "",
    phoneOTP: "",
    password: "",
    confirmPassword: "",
  };

  const handleFinalSubmit = (values: typeof initialValues) => {
    if (__DEV__) {
      // keep a dev-only log
      // eslint-disable-next-line no-console
      console.log("Final Form Values:", values);
    }
    Alert.alert("Form submitted successfully!");
  };

  const handlePreviousScreen = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={
          step === 1
            ? stepOneValidation
            : step === 2
            ? stepTwoValidation
            : step === 3
            ? Phonevalidation
            : step === 4
            ? stepThreeValidation
            : step === 5
            ? emailPhoneValidation
            : step === 6
            ? null
            : null
        }
        onSubmit={(values) => {
          if (step < 6) {
            setStep(step + 1);
          } else if (step === 6) {
            handleFinalSubmit(values);
          }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
          setFieldValue,
        }) => (
          <View style={styles.container}>
            {step === 1 && (
              <StepOne
                totalSteps={6}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                handleBack={handleBack}
                step={step}
                setFieldValue={setFieldValue}
              />
            )}

            {/* Step 2 */}
            {step === 2 && (
              <StepTwo
                handlePreviousScreen={handlePreviousScreen}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                values={values}
                touched={touched}
                step={step}
                totalSteps={6}
                setFieldValue={setFieldValue}
              />
            )}

            {/*step 3 */}
            {step === 3 && (
              <StepThree
                values={values}
                errors={errors}
                touched={touched}
                handleSubmit={handleSubmit}
                handlePreviousScreen={handlePreviousScreen}
                step={step}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            )}

            {/* Step 4 */}
            {step === 4 && (
              <StepFour
                totalSteps={6}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                handlePreviousScreen={handlePreviousScreen}
                step={step}
                setFieldValue={setFieldValue}
              />
            )}

            {/* step 5 */}
            {step === 5 && (
              <StepFive
                values={values}
                errors={errors}
                touched={touched}
                handleSubmit={handleSubmit}
                handlePreviousScreen={handlePreviousScreen}
                step={step}
                handleBlur={handleBlur}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            )}

            {/* Step 6 */}
            {step === 6 && (
              <View>
                <StepSix handlePreviousScreen={handlePreviousScreen} />
              </View>
            )}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
