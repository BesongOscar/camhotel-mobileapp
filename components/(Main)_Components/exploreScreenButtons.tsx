import { Text, View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { exploreScreenButtonsStyles as styles } from "@/styles/components/(Main)_Components/exploreScreenButtons";

type ExploreScreenButtonProps = {
  name: string;
  iconName: keyof typeof Ionicons.glyphMap;
};
export default function ExploreScreenButton({
  name,
  iconName,
}: ExploreScreenButtonProps) {
  return (
    <Pressable style={styles.ExploreButton}>
      <Ionicons
        name={iconName}
        size={20}
        color="black"
        style={{ fontWeight: "bold" }}
      />
      <Text style={styles.ExploreButtonText}>{name}</Text>
    </Pressable>
  );
}

