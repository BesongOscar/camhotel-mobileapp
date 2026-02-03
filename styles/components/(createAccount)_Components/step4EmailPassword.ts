import { StyleSheet } from "react-native";
export const step4Styles = StyleSheet.create({
  header: {
    marginBottom: 10,
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
  error: {
    color: "red",
    marginBottom: 8,
    marginLeft: 15,
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
  label: {
    color: "#000018",
    fontSize: 17,
    marginVertical: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#F2F2FF",
    padding: 12,
    height: 50,
    marginBottom: 10,
    borderRadius: 5,
  },
   formGroup: {
    marginVertical: 30,
  },
});
