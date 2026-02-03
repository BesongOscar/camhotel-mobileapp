import { StyleSheet } from "react-native";
export const emailLoginStyles = StyleSheet.create({
//     logincontainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//     justifyContent: "center",
//   },
//   loginlogo: {
//     fontSize: 24,
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: 5,
//   },
//   loginwelcome: {
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   
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
  logincreateAccount: {
    color: "#0044ff",
    fontWeight: "600",
  },
})