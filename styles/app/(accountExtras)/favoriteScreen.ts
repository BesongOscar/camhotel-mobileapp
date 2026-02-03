import { StyleSheet } from "react-native";

export const favoriteScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  favoriteHotelsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 15,
  },
  favoriteHotelsText: {
    fontSize: 18,
    fontWeight: "400",
    color: "black",
  },
  favoriteHotelsCount: {
    fontSize: 14,
    fontWeight: "400",
    color: "grey",
  },
});
