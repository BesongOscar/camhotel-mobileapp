import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { phoneLoginStyles as styles } from "@/styles/components/(login)_Components/PhoneLogin";
import i18n from "@/locales/i18n";
import { colors } from "@/src/themes";
import CountryCodePicker, {
  DEFAULT_COUNTRY,
} from "../(createAcccount)_Components/countryCodePicker";
import { Country } from "@/constants/countries";

export default function PhoneLogin() {
  const [pinVisible, setPinVisible] = useState(false);
   const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);

  return (
    <View>
      <View style={styles.logininputContainer}>
        <Text style={styles.loginlabel}>
          {i18n.t("loginScreen.phoneNumberPlaceholder")}
        </Text>
        <View style={styles.loginInput}>
          <CountryCodePicker
            selectedCountry={selectedCountry}
            onSelect={setSelectedCountry}
          />
          <TextInput
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={styles.logininputContainer}>
        <View style={styles.loginpinHeader}>
          <Text style={styles.loginlabel}>
            {i18n.t("loginScreen.pinCodePlaceholder")}
          </Text>
          <Link href={"/(auth)/(login)/forgotPin"}>
            <Text style={styles.loginforgotText}>
              {i18n.t("loginScreen.forgotPinCodeLink")}
            </Text>
          </Link>
        </View>
        <View style={styles.loginInput}>
          <TextInput
            placeholder="Enter Pin Code"
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
