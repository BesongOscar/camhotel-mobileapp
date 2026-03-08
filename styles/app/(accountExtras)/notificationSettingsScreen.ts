import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const NotificationSettingsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 12,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
});
