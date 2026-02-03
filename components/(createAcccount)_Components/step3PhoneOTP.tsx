import ArrowBack from "@/components/arrowback";
import { StepProps } from "@/constants/formValues";
import { Text, View } from "react-native";
import { step3Styles as styles } from "@/styles/components/(createAccount)_Components/step3PhonePIN";
import Button from "../button";
import OTPInput from "./otp_input";
import ProgressBar from "./ProgressIndicator";
import i18n from "@/locales/i18n";
import { Link } from "expo-router";

type StepThreeProps = StepProps;

export default function StepThree({
  step,
  values,
  touched,
  errors,
  handlePreviousScreen,
  handleSubmit,
  setFieldValue,
}: StepThreeProps) {
  return (
    <View>
      <ArrowBack onPress={handlePreviousScreen} />
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>
          {i18n.t("CreateAccountStep3.subtitle")}
        </Text>
        <Text style={styles.caption}>
          {i18n.t("CreateAccountStep3.description")}
        </Text>
        <ProgressBar currentStep={step} totalSteps={6} />
        <Text style={[styles.caption, { marginBottom: 10, marginTop: 30 }]}>
          {i18n.t("CreateAccountStep3.instruction")}
          <Text style={{ color: "#00ee" }}> +237*******</Text>
        </Text>
      </View>

      <OTPInput
        value={values.phoneOTP}
        onChange={(val) => setFieldValue("phoneOTP", val)}
      />
      {touched.phoneOTP && errors.phoneOTP && (
        <Text style={styles.error}>{errors.phoneOTP}</Text>
      )}
      <View style={{ marginBottom: 33 }} />
      <Button
        label={i18n.t("CreateAccountStep3.buttonText")}
        theme="secondary"
        width={"100%"}
        height={55}
        onPress={() => handleSubmit()}
      />
      <Text style={[styles.caption, { marginVertical: 10 }]}>
        {i18n.t("CreateAccountStep3.caption")}{" "}
        <Link style={{ color: "#00ee" }} href={"/"}>
          {i18n.t("CreateAccountStep3.resendText")}
        </Link>
      </Text>
    </View>
  );
}
