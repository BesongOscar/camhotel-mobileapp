import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { accountTabButtonStyles as styles } from "@/styles/components/(Main)_Components/AccountTabButton";

type AccountButtonProps = {
  onPress?: () => void;
  title?: string;
  leadingiconName?: keyof typeof Ionicons.glyphMap;

};
export default function AccountButton({
  onPress,
  title,
  leadingiconName,
}: AccountButtonProps) {
  return (
    <>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <View style={styles.labelContainer}>
            <Ionicons
              name={leadingiconName}
              size={20}
              color="black"
            />
            <Text style={{ fontWeight: "400" }}>{title}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={15} color={"black"} />
        </TouchableOpacity>
      </View>
    </>
  );
}

