import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
//components
import { KYCstep1Styles as styles } from "@/styles/components/(createAccount)_Components/kycVerification_Components/KYCstep1";
import Button from "@/components/button";
import ProgressBar from "../ProgressIndicator";
import ArrowBack from "@/components/arrowback";
import i18n from "@/locales/i18n";

type KYCstep1Props = {
  handlePreviousScreen?: () => void;
  onNext?: () => void;
};

const KYCstep1 = ({ handlePreviousScreen, onNext }: KYCstep1Props) => {
  return (
    <View>
      <ArrowBack onPress={handlePreviousScreen} />
      <View style={styles.header}>
        <Text style={styles.title}>Camhotel</Text>
        <Text style={styles.subtitle}>{i18n.t("createAccountStep6.subtitle")}</Text>
        <Text style={styles.caption}>{i18n.t("createAccountStep6.description")}</Text>
      </View>
      <ProgressBar currentStep={6} totalSteps={6} />
      <View style={styles.imgContainer}>
        <Image />
      </View>
      <Text style={styles.description}>
        {i18n.t("createAccountStep6.instruction")}
      </Text>

      <View style={{ flexDirection: "row", marginVertical: 7 }}>
        <Ionicons name="newspaper" color={"black"} size={30} />
        <View style={{ marginHorizontal: 25 }}>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            {i18n.t("createAccountStep6.subInstructionTitle1")}
          </Text>
          <Text>{i18n.t("createAccountStep6.subInstructionDescription1")}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Ionicons name="camera-outline" color={"black"} size={30} />
        <View style={{ marginHorizontal: 25 }}>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            {i18n.t("createAccountStep6.subInstructionTitle2")}
          </Text>
          <Text>{i18n.t("createAccountStep6.subInstructionDescription2")}</Text>
        </View>
      </View>

      <Button
        theme="secondary"
        height={60}
        width={"100%"}
        label={i18n.t("createAccountStep6.buttonText")}
        onPress={onNext}
      />
      <Link href={"/(auth)/welcome"} style={styles.link}>
        {i18n.t("createAccountStep6.linkText")}
      </Link>
    </View>
  );
};

export default KYCstep1;
