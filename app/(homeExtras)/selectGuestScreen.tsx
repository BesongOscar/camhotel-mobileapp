import ArrowBack from "@/components/arrowback";
import Button from "@/components/button";
import GuestandRoomDetailes from "@/components/(Main)_Components/guestAndRoomsDetails";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useFocusEffect } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectGuestStyles as styles } from "@/styles/app/(homeExtras)/selectGuestScreen";
import { colors } from "@/src/themes";
import { AgeOptions } from "@/constants/ageOptions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

const STORAGE_KEYS = {
  rooms: "guest_rooms",
  adults: "guest_adults",
  children: "guest_children",
  childAges: "guest_childAges",
};

export default function SelectGuestScreen() {
  const router = useRouter();

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Stores selected age for each child (null = not selected)
  const [childAges, setChildAges] = useState<(string | null)[]>([]);

  // Dropdown modal state
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);

  const MAX_ROOMS = 8;
  const MIN_ROOMS = 1;
  const MAX_GUESTS_PER_ROOM = 7;

  const totalGuests = adults + children;
  const maxGuestsAllowed = rooms * MAX_GUESTS_PER_ROOM;

   // Load guest data from AsyncStorage when screen is focused
   useFocusEffect(
    useCallback(() => {
      const loadGuestData = async () => {
        try {
          const [storedRooms, storedAdults, storedChildren, storedChildAges] =
            await Promise.all([
              AsyncStorage.getItem(STORAGE_KEYS.rooms),
              AsyncStorage.getItem(STORAGE_KEYS.adults),
              AsyncStorage.getItem(STORAGE_KEYS.children),
              AsyncStorage.getItem(STORAGE_KEYS.childAges),
            ]);

          if (storedRooms) setRooms(Number(storedRooms));
          if (storedAdults) setAdults(Number(storedAdults));
          if (storedChildren) setChildren(Number(storedChildren));
          if (storedChildAges) setChildAges(JSON.parse(storedChildAges));
        } catch (error) {
          console.log("Error loading guest data:", error);
        }
      };

      loadGuestData();
    }, [])
  );

// Save guest data to AsyncStorage whenever it changes
  const saveGuestData = async (
    newRooms: number,
    newAdults: number,
    newChildren: number,
    newChildAges: (string | null)[]
  ) => {
    try {
      await Promise.all([
        AsyncStorage.setItem(STORAGE_KEYS.rooms, String(newRooms)),
        AsyncStorage.setItem(STORAGE_KEYS.adults, String(newAdults)),
        AsyncStorage.setItem(STORAGE_KEYS.children, String(newChildren)),
        AsyncStorage.setItem(STORAGE_KEYS.childAges, JSON.stringify(newChildAges)),
      ]);
    } catch (error) {
      console.log("Error saving guest data:", error);
    }
  };

  //ROOM LOGIC
  const handleAddRoom = () => {
    if (rooms < MAX_ROOMS) {
      const newRooms = rooms + 1;
      setRooms(newRooms);
      if (newRooms > adults) setAdults(newRooms);
    }
  };

  const handleSubtractRoom = () => {
    if (rooms > MIN_ROOMS) setRooms(rooms - 1);
  };

  //ADULT LOGIC
  const handleAddAdult = () => {
    if (totalGuests < maxGuestsAllowed) setAdults(adults + 1);
  };

  const handleSubtractAdult = () => {
    if (adults > rooms) setAdults(adults - 1);
  };

  //CHILDREN LOGIC
  const handleAddChild = () => {
    if (totalGuests < maxGuestsAllowed && children < 17) {
      setChildren(children + 1);
      setChildAges((prev) => [...prev, null]);
    }
  };

  const handleSubtractChild = () => {
    if (children > 0) {
      setChildren(children - 1);
      setChildAges((prev) => prev.slice(0, -1));
    }
  };

  //AGE SELECTION
  const openDropdown = (index: number) => {
    setActiveChildIndex(index);
    setDropdownVisible(true);
  };

  const selectAge = (age: string) => {
    const index = activeChildIndex;
    setDropdownVisible(false);
    setActiveChildIndex(null);
    if (index !== null) {
      const newChildAges = [...childAges];
      newChildAges[index] = age;
      setChildAges(newChildAges);
      saveGuestData(rooms, adults, children, newChildAges);
    }
  };

  //CONTINUE HANDLER
  const handleContinue = () => {
    const guestInfo = `${adults} Adult${adults !== 1 ? "s" : ""}, ${children} Child${children !== 1 ? "ren" : ""}, ${rooms} Room${rooms !== 1 ? "s" : ""}`;
    router.push({
      pathname: "/(main)/Home",
      params: { guestInfo },
    });
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={{ marginTop: 10 }}>
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

          {/* Age dropdowns — shown only when children > 0 */}
          {children > 0 &&
            Array.from({ length: children }).map((_, index) => (
              <View key={index} style={styles.ageRow}>
                <Text style={styles.ageLabel}>Age of Child {index + 1}</Text>
                <TouchableOpacity
                  style={styles.dropdown}
                  onPress={() => openDropdown(index)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.dropdownText,
                      !childAges[index] && styles.placeholder,
                    ]}
                  >
                    {childAges[index] ?? "Age Needed"}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={16}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            ))}

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
      </ScrollView>

      {/* Age picker modal */}
      <Modal
        visible={dropdownVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Select Age — Child{" "}
              {activeChildIndex !== null ? activeChildIndex + 1 : ""}
            </Text>
            <FlatList
              data={AgeOptions}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionRow}
                  onPress={() => selectAge(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                  {activeChildIndex !== null &&
                    childAges[activeChildIndex] === item && (
                      <Ionicons
                        name="checkmark"
                        size={18}
                        color={colors.primary}
                      />
                    )}
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.buttonContainer}>
        <Button
          label="continue"
          height={60}
          width={"100%"}
          theme="secondary"
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
}
