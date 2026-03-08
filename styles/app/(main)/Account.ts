import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  settingContainers: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
