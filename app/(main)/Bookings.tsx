import Button from "@/components/button";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookingStyles as styles } from "@/styles/app/(main)/Booking";
import { useTranslation } from "@/src/hooks/Usetranslation";

const placeholder = require("../../assets/images/hotel3.jpg");
const Bookings = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
        >
          <Button label={t("bookingsScreen.active")} theme="secondary" height={50} width={100} />
          <Button label={t("bookingsScreen.checkedIn")} theme="tertiary" height={50} width={100} />
          <Button label={t("bookingsScreen.complete")} theme="tertiary" height={50} width={100} />
          <Button label={t("bookingsScreen.cancel")} theme="tertiary" height={50} width={100} />
        </ScrollView>
      </View>

      <View style={styles.divider} />

      <View style={{ paddingHorizontal: 40 }}>
        <Image style={styles.imageContainer} />
        <Text style={[styles.description, { marginVertical: 10 }]}>
          {t("bookingsScreen.findHotel")}
        </Text>
        <Text style={[styles.caption, { textAlign: "center" }]}>
          {t("bookingsScreen.noReservations")}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Bookings;