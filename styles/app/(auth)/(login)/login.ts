import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
  },
  logintoggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    borderWidth: 0.1,
    marginBottom: 25,
    width: "80%",
    alignSelf: "center",
  },
  logintoggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  logintoggleText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  loginactiveToggle: {
    backgroundColor: "#0044ff",
  },
  loginactiveText: { color: "#fff" },
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
  description: {
    color: "black",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
  logincontainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: "#00ee",
    fontSize: 14,
    margin: 10,
    textAlign: "center",
  },
});
