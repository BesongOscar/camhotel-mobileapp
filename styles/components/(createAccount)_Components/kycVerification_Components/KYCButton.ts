import { StyleSheet } from "react-native";
export const KYCButtonStyles = StyleSheet.create({
  KYCbuttonContainer: {
    height: 60,
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  KYCbutton: {
    borderWidth: 1,
    borderColor: "black", //"#00ee",
    backgroundColor: "#F2F2FF",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    borderRadius: 5,
    padding: 15,
    justifyContent: "space-between",
  },
  KYClabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "black",
  },
});
