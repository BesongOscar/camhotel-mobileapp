import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import { resetPasswordStyles as styles } from "@/styles/app/(auth)/(login)/resetPassword";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "@/src/hooks/Usetranslation";
import { colors } from "@/src/themes";

export default function ResetPassword() {
  const {t} = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const router = useRouter();
  const handlePush = () => {
    router.push("/(auth)/(login)/login");
  };
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ArrowBack/>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{t("resetScreen.subtitle1")}</Text>
        <Text style={styles.caption}>{t("resetScreen.description1")}</Text>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.logininputContainer}>
          <Text style={styles.loginlabel}>{t("resetScreen.PasswordPlaceholder")}</Text>
          <View style={styles.loginInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={20}
                color={colors.secondary}
              />
            </TouchableOpacity> 
          </View>
        </View>

        <View style={styles.logininputContainer}>
          <Text style={styles.loginlabel}>{t("resetScreen.confirmPasswordPlaceholder")}</Text>
          <View style={styles.loginInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={confirmPassword}
            />
            <TouchableOpacity
              onPress={() => setConfirmPassword(!confirmPassword)}
            >
              <Ionicons
                name={confirmPassword ? "eye-off" : "eye"}
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
