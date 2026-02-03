import { StyleSheet } from "react-native";
export const phoneLoginStyles = StyleSheet.create({
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
    borderColor: "#ddd",
    backgroundColor: "#F2F2FF",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  logincountryCode: {
    marginRight: 8,
    color: "#333",
    fontWeight: "500",
  },
  textInput: {
    flex: 1,
    height: 50,
  },
  loginpinHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginforgotText: {
    color: "#00ee",
    fontSize: 14,
  },

});
