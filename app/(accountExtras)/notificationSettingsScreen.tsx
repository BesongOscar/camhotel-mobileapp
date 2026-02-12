import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingRow } from "@/components/(accountExtras)/settingRow";
import { Ionicons } from "@expo/vector-icons";
import { NotificationSettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/notificationSettingsScreen";
import { useState } from "react";

export default function NotificationSettingsScreen() {
  const [discountOffers, setDiscountOffers] = useState(true);
  const [validatedBookings, setValidatedBookings] = useState(false);
  const [hotelReviews, setHotelReviews] = useState(false);
  const [promotions, setPromotions] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Page Title */}
        <Text style={styles.pageTitle}>Notification Settings</Text>

        {/* Settings List */}
        <SettingRow
          label="Discount and special offers"
          value={discountOffers}
          onValueChange={setDiscountOffers}
        />

        <SettingRow
          label="Validated Bookings"
          value={validatedBookings}
          onValueChange={setValidatedBookings}
        />

        <SettingRow
          label="Hotel Reviews"
          value={hotelReviews}
          onValueChange={setHotelReviews}
        />

        <SettingRow
          label="Promotions and Advertising"
          value={promotions}
          onValueChange={setPromotions}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
