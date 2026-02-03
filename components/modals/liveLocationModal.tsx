import { View, Text, StyleSheet, Modal } from "react-native";
import Button from "@/components/button";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { liveLocationModalStyles as styles } from "@/styles/components/modal/liveLocationModal";

export default function LiveLocationModal({
  visible,
  onClose,
}: {
  visible?: boolean;
  onClose?: () => void;
}) {
  const router = useRouter();

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.ModalOverlay}>
        <View style={styles.ModalBox}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              alignItems: "center",
              gap: 30,
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="location" size={30} color="#00ee" />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.ModalText}>Camhotel wants to use</Text>
              <Text style={styles.ModalText}>your device's location</Text>
            </View>
          </View>
          <Button
            theme="tertiary"
            label="Allow while visiting app"
            height={50}
            width={"100%"}
          />
          <Button
            theme="tertiary"
            label="Allow this time"
            height={50}
            width={"100%"}
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