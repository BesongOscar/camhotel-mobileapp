// StepOne.tsx
import { StepProps } from "@/constants/formValues";
import { Picker } from "@react-native-picker/picker";
import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { step1Styles as styles } from "@/styles/components/(createAccount)_Components/step1PersonalInfo";
import Button from "../button";
import ArrowBack from "../arrowback";
import i18n from "@/locales/i18n";
import ProgressBar from "./ProgressIndicator";

export default function StepOne({
  step,
  totalSteps,
  handleBack,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
}: StepProps) {
  // Determine keyboard type based on selected ID type
  const getKeyboardType = () => {
    if (values.IDType === "national_id" || values.IDType === "tax_id") {
      return "numeric";
    }
    return "default"; // alphanumeric for Passport, Driver’s License, Voter’s Card
  };

  // Handle dynamic document input
  const handleDocumentNumberChange = (text: string) => {
    if (values.IDType === "national_id" || values.IDType === "tax_id") {
      const numericText = text.replace(/[^0-9]/g, "");
      setFieldValue("IDCardNumber", numericText);
    } else {
      setFieldValue("IDCardNumber", text);
    }
  };

  // Dynamic placeholder based on selected IDType
  const getDocumentPlaceholder = () => {
    if (!values.IDType) return "Enter document number";
    switch (values.IDType) {
      case "national_id":
        return "Enter National ID Number";
      case "passport":
        return "Enter Passport Number";
      case "drivers_license":
        return "Enter Driver’s License Number";
      case "voters_card":
        return "Enter Voter’s Card Number";
      case "tax_id":
        return "Enter Tax ID Number";
      default:
        return "Enter document number";
    }
  };

  return (
    <View>
      <ArrowBack/>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{i18n.t("CreateAccountStep1.subtitle")}</Text>
        <Text style={styles.caption}>{i18n.t("CreateAccountStep1.description")}</Text>
        <ProgressBar currentStep={step} totalSteps={totalSteps || 6} />
      </View>

      {/* Form Fields */}
      <View style={styles.formGroup }>
        {/* First Name */}
        <Text style={styles.label}>{i18n.t("CreateAccountStep1.FirstNamePlaceholder")}</Text>
        <TextInput
          placeholder="Enter First Name"
          style={styles.input}
          value={values.FirstName}
          onChangeText={handleChange("FirstName")}
          onBlur={handleBlur("FirstName")}
          autoCapitalize="words"
          returnKeyType="next"
        />
        {touched?.FirstName && errors?.FirstName && (
          <Text style={styles.error}>{errors.FirstName}</Text>
        )}

        {/* Last Name */}
        <Text style={styles.label}>{i18n.t("CreateAccountStep1.LastNamePlaceholder")}</Text>
        <TextInput
          placeholder="Enter Last Name"
          style={styles.input}
          value={values.LastName}
          onChangeText={handleChange("LastName")}
          onBlur={handleBlur("LastName")}
          autoCapitalize="words"
          returnKeyType="next"
        />
        {touched?.LastName && errors?.LastName && (
          <Text style={styles.error}>{errors.LastName}</Text>
        )}

        {/* ID Type & Document Number */}
        <View style={styles.row}>
          {/* ID Type Dropdown */}
          <View style={styles.column}>
            <Text style={styles.label}>{i18n.t("CreateAccountStep1.IdTypePlaceholder")}</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.IDType}
                onValueChange={(itemValue) => {
                  setFieldValue("IDType", itemValue);
                  setFieldValue("IDCardNumber", ""); // reset document number when type changes
                }}
                onBlur={() => handleBlur("IDType")}
                style={styles.picker}
              >
                <Picker.Item label="Select Document Type" value="" />
                <Picker.Item label="National ID" value="national_id" />
                <Picker.Item label="Passport" value="passport" />
                <Picker.Item label="Driver’s License" value="drivers_license" />
                <Picker.Item label="Voter’s Card" value="voters_card" />
                <Picker.Item label="Tax ID" value="tax_id" />
              </Picker>
            </View>
            {touched?.IDType && errors?.IDType && (
              <Text style={styles.error}>{errors.IDType}</Text>
            )}
          </View>

          {/* Document Number */}
          <View style={styles.column}>
            <Text style={styles.label}>{i18n.t("CreateAccountStep1.DocumentNumberPlaceholder")}</Text>
            <TextInput
              placeholder={getDocumentPlaceholder()}
              style={styles.input}
              value={values.IDCardNumber}
              onChangeText={handleDocumentNumberChange}
              onBlur={handleBlur("IDCardNumber")}
              keyboardType={getKeyboardType()}
            />
            {touched?.IDCardNumber && errors?.IDCardNumber && (
              <Text style={styles.error}>{errors.IDCardNumber}</Text>
            )}
          </View>
        </View>
      </View>

      {/* Next Button */}
      <Button
        label={i18n.t("CreateAccountStep1.buttonText")}
        theme="secondary"
        width={"100%"}
        height={55}
        onPress={handleSubmit}
      />

      {/* Footer Login Link */}
      <Text style={styles.footerText}>
        {i18n.t("CreateAccountStep1.caption")}{" "}
        <Link href={"/(auth)/(login)/login"} style={{ color: "#00ee" }}>
          {i18n.t("CreateAccountStep1.loginText")}
        </Link>
      </Text>
    </View>
  );
}
