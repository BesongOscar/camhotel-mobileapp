import { colors } from "@/src/themes";
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  logintoggleContainer: {
    flexDirection: "row",
    backgroundColor: colors.buttonTertiary,
    borderRadius: 30,
    borderWidth: 0.1,
    marginBottom: 25,
    padding: 5,
    width: "80%",
    alignSelf: "center",
  },
  logintoggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  logintoggleText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  loginactiveToggle: {
    backgroundColor: colors.primary,
  },
  loginactiveText: { color: colors.background },
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
  description: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
  logincontainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: colors.primary,
    fontSize: 14,
    margin: 10,
    textAlign: "center",
  },
});
