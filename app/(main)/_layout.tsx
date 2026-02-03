import React, { use, useState } from "react";
import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { Tabs } from "expo-router";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const Mainlayout = () => {
  const [selectedLocation, setSelectedLocation] = useState("Buea");
  const router = useRouter();
  const handleNotifications = () => {
    router.push("/(homeExtras)/notificationScreen");
  };
  const handleProfilePress = () => {
    router.push("/(accountExtras)/accountProfileScreen");
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00ee",
        tabBarInactiveTintColor: "#777",
        tabBarStyle: { backgroundColor: "#fff", paddingTop: 2 },
        headerStyle: { backgroundColor: "#fff" },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <Text style={styles.locationLabel}>Location</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location" size={25} color="#00ee" />

                {/* Picker — placed close to icon */}
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={selectedLocation}
                    dropdownIconColor="#00ee"
                    style={styles.picker}
                    onValueChange={(itemValue) =>
                      setSelectedLocation(itemValue)
                    }
                  >
                    <Picker.Item label="Buea" value="Buea" />
                    <Picker.Item label="Douala" value="Douala" />
                    <Picker.Item label="Bafoussam" value="Bafoussam" />
                    <Picker.Item label="Yaounde" value="Yaounde" />
                    <Picker.Item label="Bertoua" value="Bertoua" />
                    <Picker.Item label="Adamawa" value="Adamawa" />
                    <Picker.Item label="Garoua" value="Garoua" />
                    <Picker.Item label="Maroua" value="Maroua" />
                    <Picker.Item label="Ebolowa" value="Ebolowa" />
                    <Picker.Item label="Bamenda" value="Bamenda" />
                  </Picker>
                </View>

                {/* Display selected city + “, Cameroon” */}
                <Text style={styles.locationText}>
                  {selectedLocation}, Cameroon
                </Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 10,
              }}
            >
              {/* Notifications Icon */}
              <Pressable
                onPress={handleNotifications}
                style={{ marginRight: 12 }}
              >
                <View
                  style={{
                    height: 35,
                    borderRadius: 50,
                    backgroundColor: "#f2f2ff",
                    padding: 5,
                  }}
                >
                  <Ionicons name="notifications" color="black" size={25} />
                </View>
              </Pressable>

              {/* Profile / Avatar */}
              <Pressable onPress={handleProfilePress}>
                <Image
                  source={{ uri: "https://via.placeholder.com/150" }} // Replace with your profile image
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 50,
                    backgroundColor: "#f2f2ff",
                  }}
                />
              </Pressable>
            </View>
          ),
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "compass-sharp" : "compass-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Bookings"
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => alert("Help tapped")}
              style={{ marginRight: 12 }}
            >
              <Ionicons name="help-circle" size={28} color="#00ee" />
            </Pressable>
          ),
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "calendar-sharp" : "calendar-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Account"
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  locationLabel: {
    fontSize: 12,
    color: "#666",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickerWrapper: {
    width: 100,
    height: 30,
    marginLeft: -80,
    justifyContent: "center",
  },
  picker: {
    width: 120,
    height: 35,
    color: "#222",
  },
  locationText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginLeft: 6,
  },
});

export default Mainlayout;
