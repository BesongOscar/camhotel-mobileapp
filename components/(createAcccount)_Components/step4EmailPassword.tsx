import { StepProps } from "@/constants/formValues";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
//components
import ArrowBack from "@/components/arrowback";
import { step4Styles as styles } from "@/styles/components/(createAccount)_Components/step4EmailPassword";
import Button from "../button";
import ProgressBar from "./ProgressIndicator";
import i18n from "@/locales/i18n";

type StepFourProps = StepProps;

export default function StepFour({
  handlePreviousScreen,
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  step,
}: StepFourProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <View>
      <ArrowBack onPress={handlePreviousScreen} />
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{i18n.t("CreateAccountStep4.subtitle")}</Text>
        <Text style={styles.caption}>{i18n.t("CreateAccountStep4.description")}</Text>
        <ProgressBar currentStep={step} totalSteps={6} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>{i18n.t("CreateAccountStep4.EmailPlaceholder")}</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          value={values.email}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
        />
        {touched.email && errors.email && (
          <Text style={styles.error}>{errors.email}</Text>
        )}

        <Text style={styles.label}>{i18n.t("CreateAccountStep4.CreatePasswordPlaceholder")}</Text>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Enter Password"
            style={styles.textInput}
            secureTextEntry={!passwordVisible}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        </View>
        {touched.password && errors.password && (
          <Text style={styles.error}>{errors.password}</Text>
        )}

        <Text style={styles.label}>{i18n.t("CreateAccountStep4.ConfirmPasswordPlaceholder")}</Text>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            secureTextEntry={!confirmpasswordVisible}
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmpasswordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        </View>
        {touched.confirmPassword && errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        )}
      </View>

      <Button
        label={i18n.t("CreateAccountStep4.buttonText")}
        theme="secondary"
        width={"100%"}
        height={55}
        onPress={() => handleSubmit()}
      />
    </View>
  );
}
