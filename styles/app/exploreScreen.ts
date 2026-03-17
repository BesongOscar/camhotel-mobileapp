import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const exploreScreenStyles = StyleSheet.create({
  AppBar: {
    paddingTop: 60,
    backgroundColor: colors.background,
    paddingHorizontal: 15,
  },
  AppBarHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 90,
    marginBottom: 12,
  },
  AppBarTitle: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  Separator: {
    height: 1,
    backgroundColor: colors.secondary,
    marginBottom: 15,
    marginTop: 10,
  },

  // Reservation block
  reservationBlock: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 12,
  },

  // Each column takes half the width
  reservationColumn: {
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
  },

  // Check in + Check out sit side by side inside column 1
  datesRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateCell: {
    flex: 1,
  },
  infoLabel: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 4,
  },
  infoValue: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.textPrimary,
  },

  // Night + Room detail boxes 
  detailBox: {
    borderWidth: 1,
    borderColor: colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
  },
  detailBoxInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  detailText: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.textPrimary,
  },

  // Hotels found row
  hotelsFoundRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
  },
  hotelsFoundText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  resultsText: {
    color: colors.textSecondary,
    fontWeight: "600",
  },
});
