import { StyleSheet } from "react-native";
export const step1Styles = StyleSheet.create({
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
  formGroup: {
    marginVertical: 30,
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
  label: {
    color: "#000018",
    fontSize: 17,
    marginVertical: 6,
  },
  error: {
    color: "red",
    marginBottom: 8,
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  footerText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },

  picker: {
    height: 50,
    width: "100%",
    color: "#333",
    backgroundColor: "#F2F2FF",
  },

});
