import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const HelpenterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.buttonBorder,
    marginBottom: 25,
  },
  dropdownText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
});
