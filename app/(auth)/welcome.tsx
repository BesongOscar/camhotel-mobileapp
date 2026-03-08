import Button from "@/components/button";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "@/locales/i18n";
import { welcomeStyles as styles } from "@/styles/app/(auth)/welcome";

export default function Welcome() {
  const router = useRouter();
  const handleNav = () => {
    return router.push("/CreateAccount");
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
    >
      <Text style={styles.title}>camhotel</Text>

      <View style={styles.imgContainer}>
        <Image />
      </View>

      <Text style={[styles.description, { textAlign: "center" }]}>
        {i18n.t("Welcome.subtitle")}
      </Text>

      <Button
        label={i18n.t("Welcome.buttonText")}
        theme="secondary"
        width={"100%"}
        height={60}
        onPress={handleNav}
      />
      <View style={{ margin: 5 }} />

      <View>
        <Text style={styles.caption}>
          {i18n.t("Welcome.caption")}
          <Link href={"/(auth)/(login)/login"} style={[styles.link]}>
            {i18n.t("Welcome.loginText")}
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
