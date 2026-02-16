import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { emailLoginStyles as styles } from "@/styles/components/(login)_Components/EmailLogin";
import i18n from "@/locales/i18n";
import { colors } from "@/src/themes";

export default function EmailLogin() {
  const [pinVisible, setPinVisible] = useState(false);
  return (
    <View>
      <View style={styles.logininputContainer}>
        <Text style={styles.loginlabel}>{i18n.t("loginScreen.emailPlaceholder")}</Text>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={styles.logininputContainer}>
        <View style={styles.loginpinHeader}>
          <Text style={styles.loginlabel}>{i18n.t("loginScreen.passwordPlaceholder")}</Text>
          <Link
            href="/(auth)/(login)/forgotPassword"
            style={styles.loginforgotText}
          >
            {i18n.t("loginScreen.forgotPasswordLink")}
          </Link>
        </View>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={!pinVisible}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => setPinVisible(!pinVisible)}>
            <Ionicons
              name={pinVisible ? "eye-off" : "eye"}
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
