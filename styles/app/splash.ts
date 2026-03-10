import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconBox: {
    width: 64,
    height: 64,
    backgroundColor: colors.background,
    borderRadius: 16,
    marginBottom: 16,
  },
  brandName: {
    color: colors.background,
    fontSize: 28,
    fontWeight: "400",
    letterSpacing: 1,
  },
  tagline: {
    color: colors.background,
    fontSize: 13,
    textAlign: "center",
    opacity: 0.85,
    marginBottom: 40,
    paddingHorizontal: 30,
    lineHeight: 20,
  },
});
