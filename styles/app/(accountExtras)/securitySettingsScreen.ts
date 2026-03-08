import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const SecuritySettingsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  Title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.2,
    paddingBottom: 10,
  },
});
