import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
    fontSize: 16,
  },
  button: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
