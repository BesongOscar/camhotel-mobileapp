import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const BookingStyles = StyleSheet.create({
  divider: {
    borderWidth: 0.2,
    backgroundColor: colors.textSecondary,
    width: "100%",
    marginVertical: 5,
  },
  imageContainer: {
    height: 200,
    width: "100%",
    backgroundColor: colors.background,
    marginBottom: 20,
    marginTop: 80,
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  description: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});
