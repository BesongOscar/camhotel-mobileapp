import { View, Text, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AccountSettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/accountSettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function AccountSettings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.Title}>Account Settings</Text>
        <View style={styles.switchtab}>
          <Text style={styles.switchtabText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#C7C7CC", true: "#B8C1FF" }}
            thumbColor={isDarkMode ? "#00ee" : "#f4f3f4"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "space-between" }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 16, letterSpacing: 0.2,color: "red" }}>
              Delete Account
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={17}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
