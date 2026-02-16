import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { cameraButtonStyles as styles } from "@/styles/components/(createAccount)_Components/kycVerification_Components/cameraButton";
import { colors } from "@/src/themes";

export default function CameraButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.cameraButtonContainer}>
      <TouchableOpacity style={styles.cameraButton} onPress={onPress}>
        <Ionicons name="camera" size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
