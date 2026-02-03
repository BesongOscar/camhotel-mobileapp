import { StyleSheet } from "react-native";
export const hotelCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "grey",
  },
  cardImage: {
    width: "100%",
    height: 120,
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 20,
    height: 30,
    width: 30,
  },
  cardContent: {
    padding: 10,
  },
  hotelDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hotelName: {
    fontWeight: "bold",
    fontSize: 13,
  },
  hotelLocation: {
    color: "grey",
    marginTop: 3,
    fontSize: 9,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  hotelPrice: {
    fontWeight: "bold",
    color: "#00ee",
    fontSize: 12,
  },
  hotelPriceDetails: {
    alignItems: "flex-start",
  },
  hotelPriceDescription: {
    fontSize: 10,
    color: "grey",
  },
  hotelreviewDetails: {
    flexDirection: "row",
    marginVertical: 3,
    alignItems: "center",
  },
  hotelratingContainer: {
    backgroundColor: "#00ee",
    borderRadius: 3,
    padding: 4,
  },
  hotelRating: {
    color: "white",
    fontSize: 10,
  },
  hotelReview: {
    fontSize: 10,
    color: "grey",
  },
  hotelRemark: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#00ee",
    marginHorizontal: 4,
  },
  hotelStar: {
    flexDirection: "row",
    alignItems: "center",
  },
});
