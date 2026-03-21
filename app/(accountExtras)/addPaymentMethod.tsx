import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddPaymentMethodStyles as styles } from "@/styles/app/(accountExtras)/addPaymentMethod";
import { useState } from "react";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function AddPaymentMethod() {
  const [paymentType, setPaymentType] = useState<"wallet" | "card">("wallet");
  const [operator, setOperator] = useState<"mtn" | "orange">("mtn");
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Text style={styles.title}>{t("addPaymentMethodScreen.title")}</Text>

      {/* Digital Wallet Option */}
      <TouchableOpacity
        style={styles.radioRow}
        onPress={() => setPaymentType("wallet")}
      >
        <View style={styles.radioOuter}>
          {paymentType === "wallet" && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.radioLabel}>{t("addPaymentMethodScreen.digitalWallet")}</Text>
      </TouchableOpacity>

      {paymentType === "wallet" && (
        <>
          <Text style={styles.subLabel}>{t("addPaymentMethodScreen.chooseOperator")}</Text>

          <View style={styles.operatorRow}>
            {/* MTN */}
            <TouchableOpacity
              style={[
                styles.operatorCard,
                operator === "mtn" && styles.operatorSelected,
              ]}
              onPress={() => setOperator("mtn")}
            >
              <View style={styles.radioSmall}>
                {operator === "mtn" && <View style={styles.radioInnerSmall} />}
              </View>
              <Text style={styles.operatorText}>{t("addPaymentMethodScreen.mtnMomo")}</Text>
            </TouchableOpacity>

            {/* Orange */}
            <TouchableOpacity
              style={[
                styles.operatorCard,
                operator === "orange" && styles.operatorSelected,
              ]}
              onPress={() => setOperator("orange")}
            >
              <View style={styles.radioSmall}>
                {operator === "orange" && (
                  <View style={styles.radioInnerSmall} />
                )}
              </View>
              <Text style={styles.operatorText}>{t("addPaymentMethodScreen.orangeMoney")}</Text>
            </TouchableOpacity>
          </View>

          {/* Phone Input */}
          <Text style={styles.subLabel}>{t("addPaymentMethodScreen.mobileMoneyNumber")}</Text>

          <View style={styles.phoneRow}>
            <View style={styles.countryBox}>
              <Text>🇨🇲 +237</Text>
            </View>

            <TextInput
              style={styles.phoneInput}
              placeholder="652752694"
              keyboardType="numeric"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </>
      )}

      {/* Credit Card Option */}
      <TouchableOpacity
        style={styles.radioRow}
        onPress={() => setPaymentType("card")}
      >
        <View style={styles.radioOuter}>
          {paymentType === "card" && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.radioLabel}>{t("addPaymentMethodScreen.creditDebitCard")}</Text>

        <View style={styles.cardIcons}>
          <Text style={styles.cardBadge}>VISA</Text>
          <Text style={styles.cardBadge}>Mastercard</Text>
        </View>
      </TouchableOpacity>
      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{t("addPaymentMethodScreen.addPayment")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
