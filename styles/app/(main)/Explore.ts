import { StyleSheet } from "react-native";

export const ExploreStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
  },
  SearchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  SearchButtonContents: {
    flexDirection: "row",
    gap: 10,
  },
  SearchButton: {
    backgroundColor: "white",
    height: 50,
    width: "85%",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginRight: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: "#00ee",
    padding: 10,
    borderRadius: 3,
  },
  divider: {
    borderWidth: 0.2,
    backgroundColor: "grey",
    width: "100%",
    marginBottom: 5,
  },
});
