import { StyleSheet } from "react-native";

export const favoriteHotelCardsStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 12,
    marginBottom: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "grey"
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: "column",
    gap: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  starsRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    color: "grey",
    marginLeft: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ratingBadge: {
    backgroundColor: "#00ee",
    borderRadius: 5,
    padding: 5,
  },
  ratingText: {
    fontSize: 12,
    color: "white",
    fontWeight: "600",
  },
  reviewsText: {
    fontSize: 13,
    color: "#00ee",
  },
  trailingIcons: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
