import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 15,
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
  description: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 1.1,
    paddingHorizontal: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  link: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  imgContainer: {
    height: 330,
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginVertical: 20,
  },
});
