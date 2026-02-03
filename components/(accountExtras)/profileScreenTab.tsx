import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileScreenTab = {
  tabName: string;
  onPress: () => void;
};

export default function ProfileScreenTab({ tabName, onPress }: ProfileScreenTab) {
  return (
    <View style={{marginVertical: 10}}>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "space-between" }}
        onPress={onPress}
      >
        <Text style={{fontSize: 17, letterSpacing: 0.2}}>{tabName}</Text>
        <Ionicons name="chevron-forward-outline" size={17} color={"black"} />
      </TouchableOpacity>
    </View>
  );
}
