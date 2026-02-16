import Button from "@/components/button";
import { KYCtakeSelfieConfirmStyles as styles } from "@/styles/app/(auth)/(createAccount)/KYCTakeSelfieConfirm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowBack from "../../../components/arrowback";
import i18n from "@/locales/i18n";
import { colors } from "@/src/themes";

export default function KYCTakeSelfieConfirm() {
  const router = useRouter();
  const { imageUri, stepKey } = useLocalSearchParams();

  const handleRetake = () => {
    router.back(); // Go back to camera screen
  };

  const handleConfirm = async () => {
    try {
      // Save the completion status to AsyncStorage
      await AsyncStorage.setItem(`kyc_${stepKey}`, "completed");

      Alert.alert("Selfie captured successfully!");

      // Pop back twice: once from KYCTakeSelfieConfirm -> KYCTakeSelfieCapture, then KYCTakeSelfieCapture -> KYCstep2
      router.back();
      router.back();
    } catch (error) {
      console.error("Error saving completion status:", error);
      Alert.alert("Error", "Failed to save image");
    }
  };
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ArrowBack/>
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{i18n.t("kycVerificationStep3.subtitle")}</Text>
      </View>

      <View style={localStyles.imageContainer}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri as string }}
            style={StyleSheet.absoluteFill}
          />
        ) : (
          <Text>No image captured</Text>
        )}
      </View>

      <Text style={styles.caption}>{i18n.t("kycVerificationConfirm.instruction")}</Text>

      <View style={localStyles.buttonsContainer}>
        <Button
          onPress={handleRetake}
          theme={"tertiary"}
          label={i18n.t("kycVerificationConfirm.cancelButtonText")}
          height={50}
          width={145}
        />
        <Button
          onPress={handleConfirm}
          theme={"secondary"}
          label={i18n.t("kycVerificationConfirm.sendButtonText")}
          height={50}
          width={145}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  imageContainer: {
    height: 331,
    width: 290,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "lightgrey",
    marginVertical: 25,
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 180,
  },
  retakeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  confirmBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
});