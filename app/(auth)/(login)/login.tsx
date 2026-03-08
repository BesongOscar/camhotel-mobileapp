import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import EmailLogin from "@/components/(login)_Components/EmailLogin";
import PhoneLogin from "@/components/(login)_Components/PhoneLogin";
import { useTranslation } from "@/src/hooks/Usetranslation";
import Button from "@/components/button";
import { loginStyles as styles } from "@/styles/app/(auth)/(login)/login";

const LoginScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("Phone");
  const handlePush = () => {
    router.push("/(main)/Home");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.logincontainer}>
        {/* Header */}
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{t("loginScreen.subtitle")}</Text>
        <Text style={styles.description}>{t("loginScreen.description")}</Text>

        {/* Toggle between Phone and Email */}
        <View style={[styles.logintoggleContainer, { marginVertical: 10 }]}>
          <TouchableOpacity
            style={[
              styles.logintoggleButton,
              selectedTab === "Phone" && styles.loginactiveToggle,
            ]}
            onPress={() => setSelectedTab("Phone")}
          >
            <Text
              style={[
                styles.logintoggleText,
                selectedTab === "Phone" && styles.loginactiveText,
              ]}
            >
              Phone
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.logintoggleButton,
              selectedTab === "Email" && styles.loginactiveToggle,
            ]}
            onPress={() => setSelectedTab("Email")}
          >
            <Text
              style={[
                styles.logintoggleText,
                selectedTab === "Email" && styles.loginactiveText,
              ]}
            >
              Email
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        {selectedTab === "Phone" ? <PhoneLogin /> : <EmailLogin />}

        {/* Login Button */}
        <Button
          theme="secondary"
          onPress={handlePush}
          label={t("loginScreen.buttonText")}
          width={"100%"}
          height={60}
        />
        {/* Footer */}
        <Text style={[styles.caption, { marginVertical: 10 }]}>
          {t("loginScreen.caption")}{" "}
          <Link href={"/(auth)/(createAccount)/CreateAccount"}>
            <Text style={styles.link}>
              {t("loginScreen.createAccountText")}
            </Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
