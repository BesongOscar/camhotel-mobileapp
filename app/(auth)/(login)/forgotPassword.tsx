import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import { forgotPasswordStyles as styles } from "@/styles/app/(auth)/(login)/forgotPassword";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function ForgotPassword() {
  const router = useRouter();
  const { t } = useTranslation();
  const handlePush = () => {
    router.push("/(auth)/(login)/resetPassword");
  };
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ArrowBack />
      <View style={{ marginVertical: 40 }}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{t("forgotScreen.subtitle1")}</Text>
        <Text style={styles.caption}>{t("forgotScreen.description1")}</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image />
      </View>

      <View style={styles.logininputContainer}>
        <Text style={styles.loginlabel}>
          {t("forgotScreen.emailPlaceholder")}
        </Text>
        <View style={styles.loginInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      <Button
        label={t("forgotScreen.buttonText")}
        onPress={handlePush}
        theme="secondary"
        height={60}
        width={"100%"}
      />
    </SafeAreaView>
  );
}
