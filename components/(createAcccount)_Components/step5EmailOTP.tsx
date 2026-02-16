import ArrowBack from "@/components/arrowback";
import { StepProps } from "@/constants/formValues";
import { Text, View } from "react-native";
import { step5Styles as styles } from "@/styles/components/(createAccount)_Components/step5EmailOTP";
import Button from "../button";
import OTPInput from "./otp_input";
import ProgressBar from "./ProgressIndicator";
import i18n from "@/locales/i18n";
import { Link } from "expo-router";
import { colors } from "@/src/themes";

type StepFiveProps = StepProps;

export default function StepFive({
  handlePreviousScreen,
  step,
  touched,
  errors,
  values,
  handleSubmit,
  setFieldValue,
}: StepFiveProps) {
  return (
    <View>
      <ArrowBack />
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>
          {i18n.t("CreateAccountStep5.subtitle")}
        </Text>
        <Text style={styles.caption}>
          {i18n.t("CreateAccountStep5.description")}
        </Text>
        <ProgressBar currentStep={step} totalSteps={6} />
        <Text style={[styles.caption, { marginBottom: 10, marginTop: 30 }]}>
          {i18n.t("CreateAccountStep5.instruction")}
          <Text style={{ color: colors.primary }}> +237*******</Text>
        </Text>
      </View>

      <OTPInput
        value={values.emailOTP}
        onChange={(val) => setFieldValue("emailOTP", val)}
      />
      {touched.emailOTP && errors.emailOTP && (
        <Text style={styles.error}>{errors.emailOTP}</Text>
      )}
      <View style={{ marginBottom: 33 }} />
      <Button
        label={i18n.t("CreateAccountStep5.buttonText")}
        theme="secondary"
        width={"100%"}
        height={55}
        onPress={() => handleSubmit()}
      />
      <Text style={[styles.caption, { marginVertical: 10 }]}>
        {i18n.t("CreateAccountStep5.caption")}{" "}
        <Link style={{ color: colors.primary }} href={"/"}>
          {i18n.t("CreateAccountStep5.resendText")}
        </Link>
      </Text>
    </View>
  );
}
