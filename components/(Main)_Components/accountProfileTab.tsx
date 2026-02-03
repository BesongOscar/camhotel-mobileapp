import { Entypo } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { accountStyles as styles } from "@/styles/app/(main)/Account";
import { useRouter } from "expo-router";

export default function AccountProfileTab() {
  const placeholderImage = require("../../assets/images/hotel1.jpg"); // Replace with actual image source or require statement
  const router = useRouter();
  const handleProfilePress = () => {
    router.push("/(accountExtras)/accountProfileScreen");
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handleProfilePress}
        style={[
          styles.settingContainers,
          { flexDirection: "row", alignItems: "center" },
        ]}
      >
        <Image
          source={placeholderImage}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Oscar-Wilde</Text>
          <Text style={{ color: "grey", fontWeight: "400", fontSize: 13 }}>
            View profile
          </Text>
        </View>
        <Entypo
          name="chevron-right"
          size={24}
          color="black"
          style={{ marginLeft: "auto" }}
        />
      </TouchableOpacity>
    </View>
  );
}
