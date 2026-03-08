import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const languageScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
  },
  Title: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  optionsContainer: {
    marginTop: 8,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: colors.background,
    marginBottom: 12,
  },

  selectedRow: {
    backgroundColor: colors.buttonTertiary,
  },

  icon: {
    fontSize: 22,
    marginRight: 12,
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
  },

  radio: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "600",
  },
});
