import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "@/src/themes";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import { resetPinStyles as styles } from "@/styles/app/(auth)/(login)/resetPin";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function ResetPin() {
  const [pinVisible, setPinVisible] = useState(false);
  const [confirmPin, setConfirmPin] = useState(false)
  const router = useRouter();
  const {t} = useTranslation();
  const handlePush = () => {
    router.push("/(auth)/(login)/login");
  };
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ArrowBack/>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{t("resetScreen.subtitle2")}</Text>
        <Text style={styles.caption}>{t("resetScreen.description2")}</Text>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.logininputContainer}>
          <Text style={styles.loginlabel}>{t("resetScreen.pinPlaceholder")}</Text>
          <View style={styles.loginInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter five digit Pin"
              secureTextEntry={!pinVisible}
            />
            <TouchableOpacity onPress={() => setPinVisible(!pinVisible)}>
              <Ionicons
                name={pinVisible ? "eye-off" : "eye"}
                size={20}
                color={colors.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logininputContainer}>
          <Text style={styles.loginlabel}>{t("resetScreen.confirmPinPlaceholder")}</Text>
          <View style={styles.loginInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Pin"
              secureTextEntry={!confirmPin}
            />
            <TouchableOpacity onPress={() => setConfirmPin(!confirmPin)}>
              <Ionicons
                name={confirmPin ? "eye-off" : "eye"}
                size={20}
                color={colors.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        label={t("resetScreen.buttonText")}
        onPress={handlePush}
        theme="secondary"
        height={60}
        width={"100%"}
      />
    </SafeAreaView>
  );
}
