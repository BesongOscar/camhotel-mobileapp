import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const KYCbackCaptureStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: colors.background,
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 25,
    textAlign: "center",
  },
  header: {
    marginBottom: 10,
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
});
