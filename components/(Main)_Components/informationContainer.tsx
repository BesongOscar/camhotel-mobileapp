import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../button";
import { informationContainerStyles as styles } from "@/styles/components/(Main)_Components/informationContainer";
import { colors } from "@/src/themes";

export default function InformationContainer() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestInfo, setGuestInfo] = useState("");

  // normalizeParam handles params that can be string | string[] | undefined
  const normalizeParam = (p: string | string[] | undefined) =>
    Array.isArray(p) ? (p[0] ?? "") : (p ?? "");

  useFocusEffect(
    useCallback(() => {
      // Load data from AsyncStorage when component mounts and Update AsyncStorage whenever values change
      loadBookingData();

      const dest = normalizeParam(params.destination);
      if (dest) {
        setDestination(dest);
        saveToAsyncStorage("destination", dest);
      }

      const ci = normalizeParam(params.checkInDate);
      if (ci) {
        setCheckInDate(ci);
        saveToAsyncStorage("checkInDate", ci);
      }

      const co = normalizeParam(params.checkOutDate);
      if (co) {
        setCheckOutDate(co);
        saveToAsyncStorage("checkOutDate", co);
      }

      const guests = normalizeParam(params.guestInfo);
      if (guests) {
        setGuestInfo(guests);
        saveToAsyncStorage("guestInfo", guests);
      }
    }, [params]),
  );

  const loadBookingData = async () => {
    try {
      const [dest, checkIn, checkOut, guests] = await Promise.all([
        AsyncStorage.getItem("destination"),
        AsyncStorage.getItem("checkInDate"),
        AsyncStorage.getItem("checkOutDate"),
        AsyncStorage.getItem("guestInfo"),
      ]);

      if (dest) setDestination(dest);
      if (checkIn) setCheckInDate(checkIn);
      if (checkOut) setCheckOutDate(checkOut);
      if (guests) setGuestInfo(guests);
    } catch (error) {
      console.log("Error loading booking data:", error);
    }
  };

  const saveToAsyncStorage = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("Error saving to AsyncStorage:", error);
    }
  };

  const handleDatePress = (dateType: string) => {
    router.push({
      pathname: "/calendarScreen",
      params: { dateType },
    });
  };

  const handleDestinationPress = () => {
    router.push("/selectDestinationScreen");
  };

  const handleGuestPress = () => {
    router.push("/selectGuestScreen");
  };

  const handleSearch = async () => {
    // Save all data before searching
    await Promise.all([
      saveToAsyncStorage("destination", destination),
      saveToAsyncStorage("checkInDate", checkInDate),
      saveToAsyncStorage("checkOutDate", checkOutDate),
      saveToAsyncStorage("guestInfo", guestInfo),
    ]);
    // Proceed with search logic
    console.log("Searching with:", {
      destination,
      checkInDate,
      checkOutDate,
      guestInfo,
    });
  };

  return (
    <View style={styles.informationContainer}>
      <Text style={styles.title}>Where to ?</Text>

      {/* ---- Search destination ---- */}
      <TouchableOpacity
        style={styles.SearchButton}
        onPress={handleDestinationPress}
      >
        <View style={styles.SearchButtonContents}>
          <Ionicons
            name="location-outline"
            size={24}
            color={colors.textSecondary}
          />
          <Text
            style={{
              color: destination ? colors.textPrimary : colors.textSecondary,
            }}
          >
            {destination || "Search destination / Hotel name"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* ---- Dates ---- */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Check-In Date</Text>
          <TouchableOpacity
            style={styles.DateButton}
            onPress={() => handleDatePress("checkIn")}
          >
            <View style={styles.DateButtonContents}>
              <Ionicons
                name="calendar-outline"
                size={25}
                color={colors.textSecondary}
              />
              <Text
                style={{
                  color: checkInDate
                    ? colors.textPrimary
                    : colors.textSecondary,
                }}
              >
                {checkInDate || "_ _ /_ _ /_ _ _ _"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Check-Out Date</Text>
          <TouchableOpacity
            style={styles.DateButton}
            onPress={() => handleDatePress("checkOut")}
          >
            <View style={styles.DateButtonContents}>
              <Ionicons
                name="calendar-outline"
                size={25}
                color={colors.textSecondary}
              />
              <Text
                style={{
                  color: checkOutDate
                    ? colors.textPrimary
                    : colors.textSecondary,
                }}
              >
                {checkOutDate || "_ _ /_ _ /_ _ _ _"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label}>Guests and Rooms</Text>
      <TouchableOpacity
        style={styles.GuestInfoContainer}
        onPress={handleGuestPress}
      >
        <View style={{ gap: 10 }}>
          <Text
            style={{
              color: guestInfo ? colors.textPrimary : colors.textSecondary,
            }}
          >
            {guestInfo || "Select guests and rooms"}
          </Text>
        </View>
        <Ionicons
          name="chevron-down-circle"
          size={25}
          color={colors.textSecondary}
        />
      </TouchableOpacity>

      <Button
        label="Search"
        theme="secondary"
        height={50}
        onPress={handleSearch}
      />
    </View>
  );
}
