import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useFocusEffect, useRouter } from "expo-router";
import { useCallback } from "react";
import { Text, View } from "react-native";
import Button from "@/components/button";
import ProgressBar from "../ProgressIndicator";
import ArrowBack from "@/components/arrowback";
import { KYCstep2Styles as styles } from "@/styles/components/(createAccount)_Components/kycVerification_Components/KYCstep2";
import Kycbutton from "./KYCbutton";
import i18n from "@/locales/i18n";
import { colors } from "@/src/themes";

type CompletionState = {
  frontId: boolean;
  backId: boolean;
  selfie: boolean;
};

type KYCstep2Props = {
  handleBack: () => void;
  completedSteps: CompletionState;
  updateCompletionStatus: (
    stepKey: keyof CompletionState,
    completed: boolean,
  ) => void;
};

export default function KYCstep2({
  handleBack,
  completedSteps,
  updateCompletionStatus,
}: KYCstep2Props) {
  const router = useRouter();

  // Check AsyncStorage whenever screen comes into focus
  useFocusEffect(
    useCallback(() => {
      checkCompletionStatus();
    }, []),
  );

  const checkCompletionStatus = async () => {
    try {
      const frontId = await AsyncStorage.getItem("kyc_frontId");
      const backId = await AsyncStorage.getItem("kyc_backId");
      const selfie = await AsyncStorage.getItem("kyc_selfie");

      updateCompletionStatus("frontId", !!frontId);
      updateCompletionStatus("backId", !!backId);
      updateCompletionStatus("selfie", !!selfie);
    } catch (error) {
      console.error("Error checking completion status:", error);
    }
  };

  const allStepsCompleted =
    completedSteps.frontId && completedSteps.backId && completedSteps.selfie;

  const handleFrontCapturePush = () => {
    // Do not pass functions via route params (not serializable); navigate and rely on AsyncStorage + useFocusEffect to pick up completion
    router.push("/KYCFrontCapture");
  };

  const handleBackCapturePush = () => {
    router.push("/KYCBackCapture");
  };

  const handleTakeSelfiePush = () => {
    router.push("/KYCTakeSelfieCapture");
  };

  const handleValidate = async () => {
    if (allStepsCompleted) {
      try {
        // Clear KYC data after successful verification
        await AsyncStorage.removeItem("kyc_frontId");
        await AsyncStorage.removeItem("kyc_backId");
        await AsyncStorage.removeItem("kyc_selfie");

        router.push("/(auth)/(createAccount)/kycVerificationModal");
      } catch (error) {
        console.error("Error clearing KYC data:", error);
        // Still navigate even if clearing fails
        // router.push("/(auth)/(createAccount)/kycVerificationModal");
      }
    }
  };

  return (
    <View>
      <ArrowBack />
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>
          {i18n.t("kycVerification.subtitle")}
        </Text>
        <Text style={styles.caption}>
          {i18n.t("kycVerification.description")}
        </Text>
        <ProgressBar currentStep={6} totalSteps={6} />
      </View>
      <Text style={styles.description}>
        {i18n.t("kycVerification.Instruction")}
      </Text>
      <View style={{ marginVertical: 40 }}>
        <Kycbutton
          label={i18n.t("kycVerification.kycButtonText1")}
          onPress={handleFrontCapturePush}
          buttonColor={completedSteps.frontId ? colors.primary : colors.textSecondary}
          textColor={completedSteps.frontId ? colors.textPrimary : colors.textSecondary}
        />
        <Kycbutton
          label={i18n.t("kycVerification.kycButtonText2")}
          onPress={handleBackCapturePush}
          buttonColor={completedSteps.backId ? colors.primary : colors.textSecondary}
          textColor={completedSteps.backId ? colors.textPrimary : colors.textSecondary}
        />
        <Kycbutton
          label={i18n.t("kycVerification.kycButtonText3")}
          onPress={handleTakeSelfiePush}
          buttonColor={completedSteps.selfie ? colors.primary : colors.textSecondary}
          textColor={completedSteps.selfie ? colors.textPrimary : colors.textSecondary}
        />
      </View>
      <Button
        theme={allStepsCompleted ? "secondary" : "tertiary"}
        label={i18n.t("kycVerification.buttonText")}
        height={60}
        width={"100%"}
        onPress={handleValidate}
      />
      <Link href={"/(auth)/(createAccount)/CreateAccount"} style={styles.link}>
        <Text>{i18n.t("kycVerification.linkText")}</Text>
      </Link>
    </View>
  );
}
