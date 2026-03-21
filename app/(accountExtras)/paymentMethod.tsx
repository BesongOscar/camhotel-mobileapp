import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { PaymentMethodStyles as styles } from "@/styles/app/(accountExtras)/paymentMethod";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function PaymentMethod() {
    const router = useRouter();
    const { t } = useTranslation();
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View>
        <Text style={styles.Title}> {t("paymentMethodScreen.title")}</Text>
        {/* <Pressable>
          <Image />
          <View>
            <Text>MTN Mobile Money</Text>
            <Text>+237674477798</Text>
          </View>
          <MaterialIcons name="delete-outline" size={24} color="grey" />
        </Pressable> */}
      </View>
      <TouchableOpacity onPress={()=> {
        router.push('/(accountExtras)/addPaymentMethod')
      }} style={styles.AddPaymentButton}>
        <FontAwesome6 name="add" size={24} color="black" />
        <Text style={styles.AddPaymentLabel}>{t("paymentMethodScreen.addPaymentMethod")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
