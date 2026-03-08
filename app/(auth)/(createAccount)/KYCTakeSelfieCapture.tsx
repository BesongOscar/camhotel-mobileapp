import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import { KYCtakeSelfieCaptureStyles as styles } from "@/styles/app/(auth)/(createAccount)/KYCTakeSelfieCapture";
import { useRouter } from "expo-router";
import ArrowBack from "../../../components/arrowback";
import CameraButton from "@/components/(createAcccount)_Components/kycVerification_Components/cameraButton";
import { useTranslation } from "@/src/hooks/Usetranslation";
import { colors } from "@/src/themes/colors";

export default function KYCTakeSelfieCapture() {
  const router = useRouter();
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const { t } = useTranslation();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      router.push({
        pathname: "/KYCTakeSelfieConfirm",
        params: { imageUri: photo.uri, stepKey: "selfie" },
      });
    }
  };

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          {t("kycCameraAccess.title")}
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={{ color: "blue" }}>{t("kycCameraAccess.subtitle")}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ArrowBack />
      <View style={styles.header}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>
          {t("kycVerificationStep3.subtitle")}
        </Text>
      </View>

      <View style={localStyles.cameraContainer}>
        <CameraView
          ref={cameraRef}
          facing="front"
          style={StyleSheet.absoluteFill}
        />
      </View>

      <View>
        <Text style={styles.caption}>
          {t("kycVerificationStep3.description")}
        </Text>
        <Text style={styles.caption}>
          {t("kycVerificationStep3.instruction")}
        </Text>
      </View>

      <CameraButton onPress={takePhoto} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  cameraContainer: {
    height: 331,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 25,
    alignSelf: "center",
  },
  cameraButton: {
    alignSelf: "center",
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 50,
  },
});
