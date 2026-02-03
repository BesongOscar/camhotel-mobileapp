import { StyleSheet } from "react-native";

export const resetPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
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
    borderColor: "#ddd",
    backgroundColor: "#F2F2FF",
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
  formGroup: {
    marginVertical: 30,
  },
});
