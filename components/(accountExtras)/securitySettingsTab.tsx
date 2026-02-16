import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/themes";

type ProfileScreenTab = {
  tabName: string;
  onPress: () => void;
};

export default function SecuritySettingsTab({ tabName, onPress }: ProfileScreenTab) {
  return (
    <View style={{marginVertical: 10}}>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "space-between" }}
        onPress={onPress}
      >
        <Text style={{fontSize: 16, letterSpacing: 0.2}}>{tabName}</Text>
        <Ionicons name="chevron-forward-outline" size={17} color={colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}
