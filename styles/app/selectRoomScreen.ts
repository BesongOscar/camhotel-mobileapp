import { StyleSheet } from "react-native";

export const SelectRoomScreenStyles = StyleSheet.create({
    container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
  },
  hotelTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 4,
    color: "#000",
  },
  detailBoxContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  detailBox1: {
    height: 45,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#00ee",
    width: "50%",
    borderWidth: 1,
  },
  detailBox2: {
    height: 45,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: "50%",
    borderColor: "#00ee",
    borderWidth: 1,
  },
  bottomBar: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceSection: {
    flex: 1,
  },
  startFromText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#00ee",
  },
  priceLittleText: {
    color: "grey",
    fontSize: 10,
  },
});