import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const favoriteScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 1,
    paddingHorizontal: 15,
  },
  favoriteHotelsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 15,
  },
  favoriteHotelsText: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.textPrimary,
  },
  favoriteHotelsCount: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.textSecondary,
  },
});
