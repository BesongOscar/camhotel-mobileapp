import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import { forgotPasswordStyles as styles } from "@/styles/app/(auth)/(login)/forgotPassword";
import i18n from "@/locales/i18n";

export default function forgotPassword() {
  const router = useRouter();
  const handlePush = () => {
    router.push("/(auth)/(login)/resetPassword");
  };
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ArrowBack/>
      <View style={{ marginVertical: 40 }}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{i18n.t("forgotScreen.subtitle1")}</Text>
        <Text style={styles.caption}>{i18n.t("forgotScreen.description1")}</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image />
      </View>

      <View style={styles.logininputContainer}>
        <Text style={styles.loginlabel}>{i18n.t("forgotScreen.emailPlaceholder")}</Text>
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
        label={i18n.t("forgotScreen.buttonText")}
        onPress={handlePush}
        theme="secondary"
        height={60}
        width={"100%"}
      />
    </SafeAreaView>
  );
}
