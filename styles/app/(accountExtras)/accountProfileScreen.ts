import { StyleSheet } from "react-native";

export const accountProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  profileContainer: {
    backgroundColor: "#f2f2ff",
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    borderRadius: 5,
  },
  AvaterContainer: {
    position: "relative",
    marginBottom: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#00ee",
  },
  CameraIconContainer: {
    position: "absolute",
    bottom: -10,
    left: 25,
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "center",
    justifyContent: "center",
  },
  userNameContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    gap: 10,
  },
  userName: {
    fontSize: 17,
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  statsRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
  },
  statsNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: 7,
  },
  totalBookingsContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  totalBookingsText: {
    color: "#666",
    fontSize: 12,
  },
  totalBookingNumber: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  favouriteHotelContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  favouriteHotelText: {
    color: "#666",
    fontSize: 12,
  },
  favouriteHotelNumber: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  totalReviewsContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  totalReviewsText: {
    color: "#666",
    fontSize: 12
  },
  totalReviewsNumber: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});
