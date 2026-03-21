import LiveLocationModal from "@/components/modals/liveLocationModal";
import { liveLocationStyles as styles } from "@/styles/app/(homeExtras)/liveLocation";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/src/themes/colors";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function LiveLocation() {
  const [modalVisible, setModalVisible] = useState(true);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.Container} edges={["top"]}>
      <LiveLocationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.iconContainer}>
          <Ionicons name="location" size={50} color={colors.primary} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.title}>{t("liveLocationScreen.title")}</Text>
          <Text style={styles.subtitle}>
            {t("liveLocationScreen.subtitle1")}
          </Text>
          <Text style={styles.subtitle}>{t("liveLocationScreen.subtitle2")}</Text>
        </View>

        <Link
          href={"/(homeExtras)/selectDestinationScreen"}
          style={styles.link}
        >
          {t("liveLocationScreen.enterManually")}
        </Link>
      </View>
    </SafeAreaView>
  );
}
