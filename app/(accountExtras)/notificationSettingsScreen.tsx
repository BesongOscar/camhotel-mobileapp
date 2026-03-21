import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingRow } from "@/components/(accountExtras)/settingRow";
import { Ionicons } from "@expo/vector-icons";
import { NotificationSettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/notificationSettingsScreen";
import { useState } from "react";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function NotificationSettingsScreen() {
  const [discountOffers, setDiscountOffers] = useState(true);
  const [validatedBookings, setValidatedBookings] = useState(false);
  const [hotelReviews, setHotelReviews] = useState(false);
  const [promotions, setPromotions] = useState(false);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t("notificationSettingsScreen.title")}</Text>

        {/* Settings List */}
        <SettingRow
          label={t("notificationSettingsScreen.discountOffers")}
          value={discountOffers}
          onValueChange={setDiscountOffers}
        />

        <SettingRow
          label={t("notificationSettingsScreen.validatedBookings")}
          value={validatedBookings}
          onValueChange={setValidatedBookings}
        />

        <SettingRow
          label={t("notificationSettingsScreen.hotelReviews")}
          value={hotelReviews}
          onValueChange={setHotelReviews}
        />

        <SettingRow
          label={t("notificationSettingsScreen.promotions")}
          value={promotions}
          onValueChange={setPromotions}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
