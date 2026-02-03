import { StyleSheet } from "react-native";

export const selectDestinationStyles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 80,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00ee",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 30,
    marginBottom: 12,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
    color: "black",
  },
  divider: {
    backgroundColor: "grey",
    height: 1,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#f2f2ff",
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "48%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  buttonText: {
    color: "black",
    marginLeft: 5,
  },
});
