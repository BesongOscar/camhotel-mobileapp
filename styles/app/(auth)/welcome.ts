import { StyleSheet } from "react-native";

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
  caption: {
    fontSize: 15,
    textAlign: "center",
  },
  description: {
    color: "black",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 1.1,
    fontFamily: "Arias",
    paddingHorizontal: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  link: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  imgContainer: {
    height: 330,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "lightgrey",
    marginVertical: 20,
  },
});
