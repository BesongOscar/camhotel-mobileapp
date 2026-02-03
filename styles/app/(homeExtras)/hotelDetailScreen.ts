import { StyleSheet } from "react-native";

export const hotelDetailStyles = StyleSheet.create({
    safe: {
    flex: 1,
    backgroundColor: "#fff",
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
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    width: "100%",
    height: 250,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  content: {
    marginTop: 10,
    paddingHorizontal: 16,
  },

  headerSection: {
    marginTop: 6,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hotelTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    color: "#000",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "grey",
    fontSize: 14,
  },

  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  ratingBadge: {
    backgroundColor: "#00ee",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  ratingBadgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  ratingLabel: {
    color: "#333",
    fontSize: 14,
  },
  seeReviews: {
    color: "#00ee",
    fontWeight: "600",
    textDecorationLine: "underline",
    textDecorationColor: "#00ee",
  },

  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
  },

  reservationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 20,
  },
  resColumn: {
    flex: 1,
  },
  resLabel: {
    color: "grey",
    fontSize: 12,
    marginBottom: 4,
  },
  resDate: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },
  resSeparator: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  detailsRow: {
    flexDirection: "row",
  },
  detailBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: "#fff",
    gap: 10,
    marginTop: 10,
  },
  detailText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#000",
  },

  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 2,
  },
  amenityItem: {
    width: "29%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  amenityIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    backgroundColor: "#f8f8f8",
  },
  amenityLabel: {
    fontSize: 12,
    color: "#222",
    fontWeight: "500",
  },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    paddingHorizontal: 16,
    paddingVertical: 12,
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
