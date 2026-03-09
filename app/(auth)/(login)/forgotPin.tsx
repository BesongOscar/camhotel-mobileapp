import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import { forgotPinStyles as styles } from "@/styles/app/(auth)/(login)/forgotPin";
import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import { useTranslation } from "@/src/hooks/Usetranslation";
import CountryCodePicker, {
  DEFAULT_COUNTRY,
} from "@/components/(createAcccount)_Components/countryCodePicker";
import { Country } from "@/constants/countries";
import { useState } from "react";

export default function ForgotPin() {
  const [selectedCountry, setSelectedCountry] =
    useState<Country>(DEFAULT_COUNTRY);
  const router = useRouter();
  const { t } = useTranslation();
  const handlePush = () => {
    router.push("/(auth)/(login)/resetPin");
  };
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ArrowBack />
      <View style={{ marginVertical: 40 }}>
        <Text style={styles.title}>camhotel</Text>
        <Text style={styles.subtitle}>{t("forgotScreen.subtitle2")}</Text>
        <Text style={styles.caption}>{t("forgotScreen.description2")}</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image />
      </View>

      <View style={styles.logininputContainer}>
        <Text style={styles.loginlabel}>
          {t("forgotScreen.phoneNumberPlaceholder")}
        </Text>
        <View style={styles.loginInput}>
          <CountryCodePicker
          selectedCountry={selectedCountry}
          onSelect={setSelectedCountry}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
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
