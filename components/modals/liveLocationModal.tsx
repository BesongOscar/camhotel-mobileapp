import { View, Text, ActivityIndicator, Modal } from "react-native";
import Button from "@/components/button";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { liveLocationModalStyles as styles } from "@/styles/components/modal/liveLocationModal";
import { colors } from "@/src/themes";
import * as Location from "expo-location";
import { useState } from "react";

export default function LiveLocationModal({
  visible,
  onClose,
}: {
  visible?: boolean;
  onClose?: () => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Request foreground permission and fetch location
  const requestLocation = async () => {
    setLoading(true);
    setError(null);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission denied. Please enable location in settings.");
        setLoading(false);
        return;
      }

      const coords = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      // Reverse-geocode to get city/region name
      const [place] = await Location.reverseGeocodeAsync({
        latitude: coords.coords.latitude,
        longitude: coords.coords.longitude,
      });

      const city =
        place?.city || place?.subregion || place?.region || "Your Location";

      onClose?.();

      // Navigate to Home passing the detected city as destination
      router.push({
        pathname: "/(main)/Home",
        params: { destination: city },
      });
    } catch (e) {
      setError("Could not get location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.ModalOverlay}>
        <View style={styles.ModalBox}>
          {/* header */}
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              alignItems: "center",
              gap: 30,
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="location" size={30} color={colors.primary} />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.ModalText}>Camhotel wants to use</Text>
              <Text style={styles.ModalText}>your device's location</Text>
            </View>
          </View>

          {/* Loading indicator */}
          {loading && (
            <ActivityIndicator
              size="small"
              color={colors.primary}
              style={{ marginBottom: 10 }}
            />
          )}
          {/* Error message */}
          {error && (
            <Text
              style={{
                color: colors.error,
                fontSize: 13,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              {error}
            </Text>
          )}

          <Button
            theme="tertiary"
            label="Allow while visiting app"
            height={50}
            width={"100%"}
            onPress={requestLocation}
          />
          <Button
            theme="tertiary"
            label="Allow this time"
            height={50}
            width={"100%"}
            onPress={requestLocation}
          />
          <Button
            theme="tertiary"
            label="Never Allow"
            height={50}
            width={"100%"}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
}
