import ArrowBack from "@/components/arrowback";
import { StepProps } from "@/constants/formValues";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { step2Styles as styles } from "@/styles/components/(createAccount)_Components/step2PhonePIN";
import Button from "../button";
import ProgressBar from "./ProgressIndicator";
import i18n from "@/locales/i18n";
import { colors } from "@/src/themes";

type StepTwoProps = StepProps;

export default function StepTwo({
  handlePreviousScreen,
  step,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
}: StepTwoProps) {
  const [pinVisible, setPinVisible] = useState(false);
  const [confirmPINVisible, setConfirmPINVisible] = useState(false);
  return (
    <View>
      <ArrowBack />
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>
          {i18n.t("CreateAccountStep2.subtitle")}
        </Text>
        <Text style={styles.caption}>
          {i18n.t("CreateAccountStep2.description")}
        </Text>
        <ProgressBar currentStep={step} totalSteps={6} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>
          {i18n.t("CreateAccountStep2.PhoneNumberPlaceholder")}
        </Text>
        <TextInput
          placeholder="Enter Phone Number"
          style={styles.input}
          value={values.PhoneNumber}
          onChangeText={handleChange("PhoneNumber")}
          onBlur={handleBlur("PhoneNumber")}
          keyboardType="phone-pad"
        />
        {touched.PhoneNumber && errors.PhoneNumber && (
          <Text style={styles.error}>{errors.PhoneNumber}</Text>
        )}

        <Text style={styles.label}>
          {i18n.t("CreateAccountStep2.createPinPlaceholder")}
        </Text>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Enter Five Digit PIN"
            style={styles.textInput}
            secureTextEntry={!pinVisible}
            value={values.PIN}
            onChangeText={handleChange("PIN")}
            onBlur={handleBlur("PIN")}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={() => setPinVisible(!pinVisible)}>
            <Ionicons
              name={pinVisible ? "eye-off" : "eye"}
              color={colors.textSecondary}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {touched.PIN && errors.PIN && (
          <Text style={styles.error}>{errors.PIN}</Text>
        )}

        <Text style={styles.label}>
          {i18n.t("CreateAccountStep2.confirmPinPlaceholder")}
        </Text>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Confirm PIN"
            style={styles.textInput}
            secureTextEntry={!confirmPINVisible}
            value={values.confirmPIN}
            onChangeText={handleChange("confirmPIN")}
            onBlur={handleBlur("confirmPIN")}
          />
          <TouchableOpacity
            onPress={() => setConfirmPINVisible(!confirmPINVisible)}
          >
            <Ionicons
              name={confirmPINVisible ? "eye-off" : "eye"}
              color={colors.textSecondary}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {touched.confirmPIN && errors.confirmPIN && (
          <Text style={styles.error}>{errors.confirmPIN}</Text>
        )}
      </View>

      <Button
        label="Next"
        theme="secondary"
        width={"100%"}
        height={55}
        onPress={() => handleSubmit()}
      />
    </View>
  );
}
