import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const forgotPinStyles = StyleSheet.create({
    container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  logininputContainer: {
    marginBottom: 20,
  },
  loginlabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  loginInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.buttonBorder,
    backgroundColor: colors.buttonTertiary,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 25,
    textAlign: "center",
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
  imgContainer: {
    height: 220,
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.buttonSecondary,
    marginTop: 5,
    marginBottom: 10,
  },
});
