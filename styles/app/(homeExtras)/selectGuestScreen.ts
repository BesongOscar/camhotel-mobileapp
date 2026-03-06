import { colors } from "@/src/themes/colors";
import { StyleSheet } from "react-native";

export const selectGuestStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
