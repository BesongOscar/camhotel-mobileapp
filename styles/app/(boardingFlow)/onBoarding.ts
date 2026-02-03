import { StyleSheet } from "react-native";

export const onBoardingStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  slide: { justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  desc: { fontSize: 16, color: "#666", textAlign: "center" },
  dots: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#00ee",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  button: {
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },

  imgContainer: {
    height: 330,
    width: 350,
    borderRadius: 15,
    backgroundColor: "#aaa",
    marginVertical: 15,
  },
});
