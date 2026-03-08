import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const ExploreStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  SearchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  SearchButtonContents: {
    flexDirection: "row",
    gap: 10,
  },
  SearchButton: {
    backgroundColor: colors.background,
    height: 50,
    width: "85%",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.buttonBorder,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginRight: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 3,
  },
  divider: {
    borderWidth: 0.2,
    backgroundColor: colors.textSecondary,
    width: "100%",
    marginBottom: 5,
  },
});
