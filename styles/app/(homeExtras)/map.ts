import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const mapStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  map: { flex: 1 },

  // Back button
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  // Search row
  searchBarRow: {
    position: "absolute",
    top: 108,
    left: 15,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    zIndex: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 46,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    overflow: "hidden",
  },
  textInput: {
    flex: 1,
    height: 46,
    fontSize: 14,
    color: "#111",
    backgroundColor: "transparent",
    paddingHorizontal: 6,
  },
  clearBtn: { paddingHorizontal: 8 },
  filterBtn: {
    backgroundColor: "#0057ff",
    borderRadius: 10,
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0057ff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },

  // Results badge
  resultsBadge: {
    position: "absolute",
    top: 164,
    alignSelf: "center",
    backgroundColor: "#0057ff",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    zIndex: 9,
  },
  resultsBadgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  // Error
  errorContainer: {
    position: "absolute",
    top: 168,
    alignSelf: "center",
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    zIndex: 9,
  },
  errorText: { color: "#fff", fontSize: 13, fontWeight: "500" },

  // Loading
  loadingContainer: {
    position: "absolute",
    top: 168,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 20,
    zIndex: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 3,
  },
  loadingText: { color: "#0057ff", fontSize: 13, fontWeight: "500" },
  noResultsContainer: { padding: 12, alignItems: "center" },
  noResultsText: { color: "#888", fontSize: 13 },

  // Cards
  cardContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  noHotelsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    alignSelf: "flex-start",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  noHotelsText: { color: "#666", fontSize: 14 },
  // ── HotelCard sizing + selection highlight when used on the map ───────────
  mapCard: {
    width: 200,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 14,
  },
  mapCardSelected: {
    borderColor: "#0057ff",
  },
});
