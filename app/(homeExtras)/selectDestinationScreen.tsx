import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ArrowBack from "@/components/arrowback";
import { selectDestinationStyles as styles } from "@/styles/app/(homeExtras)/selectDestinationScreen";

export default function SelectDestination() {
  const router = useRouter();
  const handleMapNavigation = () => {
    router.push("/map");
  }
  const handleLiveLocation = () => {
    router.push("/(homeExtras)/liveLocation");
  }
  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={{ padding: 15 }}>
      {/* Header */}
      <View style={styles.appBar}>
        <ArrowBack onPress={handleBack} />
        <Text style={styles.header}>Select Destination</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Entypo name="location-pin" size={24} color="#00ee" />
        <TextInput
          placeholder="Search destination / Hotel name"
          placeholderTextColor="grey"
          style={styles.textInput}
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleMapNavigation}>
          <FontAwesome6 name="map-location-dot" size={20} color="#00ee" />
          <Text style={styles.buttonText}> Continue on map</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleLiveLocation}>
          <Entypo name="location" size={20} color="#00ee" />
          <Text style={styles.buttonText}> Live Location</Text>
        </Pressable>
      </View>

      {/* Divider */}
      <View style={styles.divider} />
    </SafeAreaView>
  );
}
