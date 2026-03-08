import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  Alert,
  Linking,
} from "react-native";
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
      // Step 1: Check if location services are enabled
      const isEnabled = await Location.hasServicesEnabledAsync();
      if (!isEnabled) {
        setError(
          "Location services are disabled. Please enable GPS in your device settings.",
        );
        setLoading(false);
        return;
      }

      // Step 2: Request permission
      const { status, canAskAgain } =
        await Location.requestForegroundPermissionsAsync();

      if (status === "denied") {
        if (!canAskAgain) {
          setError(
            "Location permission permanently denied. Please enable it in App Settings.",
          );
          Alert.alert(
            "Permission Required",
            "Please go to Settings > Apps > CAMHOTEL-APP > Permissions and enable Location.",
            [
              { text: "Cancel", style: "cancel" },
              { text: "Open Settings", onPress: () => Linking.openSettings() },
            ],
          );
        } else {
          setError("Location permission denied. Please allow location access.");
        }
        setLoading(false);
        return;
      }

      if (status !== "granted") {
        setError("Location permission not granted. Please try again.");
        setLoading(false);
        return;
      }

      // Step 3: Race location fetch against a 15s timeout
      const locationPromise = Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low, // Low is much faster than Balanced
      });

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("TIMEOUT")), 15000),
      );

      let coords: Location.LocationObject;
      try {
        coords = await Promise.race([locationPromise, timeoutPromise]);
      } catch (raceErr: any) {
        if (raceErr.message === "TIMEOUT") {
          // Fallback to last known location
          const lastKnown = await Location.getLastKnownPositionAsync({
            maxAge: 300000, // up to 5 minutes old
            requiredAccuracy: 5000,
          });
          if (lastKnown) {
            coords = lastKnown;
          } else {
            setError(
              "GPS timed out. Make sure GPS is on and you have a clear sky view, then try again.",
            );
            setLoading(false);
            return;
          }
        } else {
          throw raceErr;
        }
      }

      // Step 4: Reverse geocode (non-fatal if it fails)
      let city = "Your Location";
      try {
        const [place] = await Location.reverseGeocodeAsync({
          latitude: coords.coords.latitude,
          longitude: coords.coords.longitude,
        });
        city =
          place?.city || place?.subregion || place?.region || "Your Location";
      } catch {
        // Continue with fallback
      }

      onClose?.();
      router.push({
        pathname: "/(main)/Home",
        params: { destination: city },
      });
    } catch (e: any) {
      console.error("Location error:", e);
      setError(
        "Could not get location. Please check your GPS settings and try again.",
      );
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
