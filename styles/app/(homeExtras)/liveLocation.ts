import { StyleSheet } from "react-native";

export const liveLocationStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
    marginBottom: 5,
  },
  TextContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  iconContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#eee",
    padding: 10,
    borderRadius: 100,
  },
  link: {
    color: "#00ee",
    marginTop: 100,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
