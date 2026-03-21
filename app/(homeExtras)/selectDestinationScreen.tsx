import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector/icons/FontAwesome6';
import ArrowBack from "@/components/arrowback";
import { selectDestinationStyles as styles } from "@/styles/app/(homeExtras)/selectDestinationScreen";
import { colors } from "@/src/themes";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function SelectDestination() {
  const router = useRouter();
  const { t } = useTranslation();
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
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Entypo name="location-pin" size={24} color={colors.primary} />
        <TextInput
          placeholder={t("selectDestinationScreen.searchPlaceholder")}
          placeholderTextColor={colors.textSecondary}
          style={styles.textInput}
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleMapNavigation}>
          <FontAwesome6 name="map-location-dot" size={20} color={colors.primary} />
          <Text style={styles.buttonText}> {t("selectDestinationScreen.continueOnMap")}</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleLiveLocation}>
          <Entypo name="location" size={20} color={colors.primary} />
          <Text style={styles.buttonText}> {t("selectDestinationScreen.liveLocation")}</Text>
        </Pressable>
      </View>

      {/* Divider */}
      <View style={styles.divider} />
    </SafeAreaView>
  );
}
