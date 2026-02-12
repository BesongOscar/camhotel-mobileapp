import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import GuestandRoomDetailes from "@/components/(Main)_Components/guestAndRoomsDetails";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectGuestStyles as styles } from "@/styles/app/(homeExtras)/selectGuestScreen";

export default function SelectGuestScreen() {
  const router = useRouter();
  
  const handleBack = () => {
    router.back();
  };

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const MAX_ROOMS = 8;
  const MIN_ROOMS = 1;
  const MAX_GUESTS_PER_ROOM = 7;
  const MIN_GUESTS_PER_ROOM = 3;

  // Total guests = adults + children
  const totalGuests = adults + children;
  const maxGuestsAllowed = rooms * MAX_GUESTS_PER_ROOM;

  /** ---------------- ROOM LOGIC ---------------- **/
  const handleAddRoom = () => {
    if (rooms < MAX_ROOMS) {
      const newRooms = rooms + 1;
      setRooms(newRooms);

      // if rooms > adults => must increase adults
      if (newRooms > adults) {
        setAdults(newRooms);
      }
    }
  };

  const handleSubtractRoom = () => {
    if (rooms > MIN_ROOMS) {
      const newRooms = rooms - 1;
      setRooms(newRooms);
    }
  };

  /** ---------------- ADULT LOGIC ---------------- **/
  const handleAddAdult = () => {
    if (totalGuests < maxGuestsAllowed) {
      setAdults(adults + 1);
    }
  };

  const handleSubtractAdult = () => {
    if (adults > rooms) {
      setAdults(adults - 1);
    }
  };

  /** ---------------- CHILDREN LOGIC ---------------- **/
  const handleAddChild = () => {
    if (totalGuests < maxGuestsAllowed && children < 17) {
      setChildren(children + 1);
    }
  };

  const handleSubtractChild = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  /** ---------------- CONTINUE HANDLER ---------------- **/
  const handleContinue = () => {
    const guestInfo = `${adults} Adult${adults !== 1 ? "s" : ""}, ${children} Child${children !== 1 ? "ren" : ""}, ${rooms} Room${rooms !== 1 ? "s" : ""}`;
    
    router.push({
      pathname: "/(main)/Home",
      params: {
        guestInfo: guestInfo,
      },
    });
  };

  return (
    <SafeAreaView edges={["top"]} style={{ padding: 15 }}>
      <View style={styles.appBar}>
        <ArrowBack/>
        <Text style={styles.header}>Select Guests and Rooms</Text>
      </View>
      <View style={{ marginTop: 35 }}>
        <GuestandRoomDetailes
          title="Adults"
          subtitle="Maximum of 4 adults per room"
          value={adults}
          onAdd={handleAddAdult}
          onSubtract={handleSubtractAdult}
          disableAdd={totalGuests >= maxGuestsAllowed}
          disableSubtract={adults <= rooms}
        />
        <GuestandRoomDetailes
          title="Children"
          subtitle="0-17 years"
          value={children}
          onAdd={handleAddChild}
          onSubtract={handleSubtractChild}
          disableAdd={children >= 17 || totalGuests >= maxGuestsAllowed}
          disableSubtract={children <= 0}
        />
        <GuestandRoomDetailes
          title="Rooms"
          subtitle="Maximum of 8 rooms"
          value={rooms}
          onAdd={handleAddRoom}
          onSubtract={handleSubtractRoom}
          disableAdd={rooms >= MAX_ROOMS}
          disableSubtract={rooms <= MIN_ROOMS}
        />
      </View>
      <View style={{ marginTop: 400 }}>
        <Button 
          label="continue" 
          height={50} 
          width={"100%"} 
          theme="secondary"
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
}

