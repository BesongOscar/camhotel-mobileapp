import { CameraView, useCameraPermissions } from "expo-camera";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowBack from "../../../components/arrowback";
import { KYCbackCaptureStyles as styles } from "@/styles/app/(auth)/(createAccount)/KYCBackCapture";
import CameraButton from "@/components/(createAcccount)_Components/kycVerification_Components/cameraButton";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function KYCBackCapture() {
  const router = useRouter();
  const { t } = useTranslation();
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      router.push({
        pathname: "/KYCBackConfirm",
        params: { imageUri: photo.uri, stepKey: "backId" },
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
          {t("kycVerificationStep2.subtitle")}
        </Text>
      </View>

      <View style={localStyles.cameraContainer}>
        <CameraView
          ref={cameraRef}
          facing="back"
          style={StyleSheet.absoluteFill}
        />
      </View>

      <View>
        <Text style={styles.caption}>
          {t("kycVerificationStep2.description")}
        </Text>
        <Text style={styles.caption}>
          {t("kycVerificationStep2.instruction")}
        </Text>
      </View>

      <CameraButton onPress={takePhoto} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  cameraContainer: {
    height: 260,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 25,
    alignSelf: "center",
  },
  cameraButton: {
    alignSelf: "center",
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 50,
    marginTop: 200,
  },
});
