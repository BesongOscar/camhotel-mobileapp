import Button from "@/components/button";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookingStyles as styles } from "@/styles/app/(main)/Booking";

const placeholder = require("../../assets/images/hotel3.jpg");
const Bookings = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
        >
          <Button label="Active" theme="secondary" height={50} width={100} />
          <Button label="Checked In" theme="tertiary" height={50} width={100} />
          <Button label="Complete" theme="tertiary" height={50} width={100} />
          <Button label="Cancel" theme="tertiary" height={50} width={100} />
        </ScrollView>
      </View>

      <View style={styles.divider} />

      <View style={{ paddingHorizontal: 40 }}>
        <Image style={styles.imageContainer} />
        <Text style={[styles.description, { marginVertical: 10 }]}>
          Find a hotel
        </Text>
        <Text style={[styles.caption, { textAlign: "center" }]}>
          No reservations yet. Once you book a reservation it will appear here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Bookings;