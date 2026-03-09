import { StyleSheet } from "react-native";

export const pickerStyles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 4,
  },
  flag: {
    fontSize: 20,
  },
  dialCode: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#ddd",
    marginRight: 8,
  },
  modal: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
    paddingHorizontal: 12,
    backgroundColor: "#F2F2FF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 44,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 13,
    gap: 12,
  },
  itemSelected: {
    backgroundColor: "#F0F4FF",
  },
  itemFlag: {
    fontSize: 22,
    width: 32,
  },
  itemName: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },
  itemDial: {
    fontSize: 14,
    color: "#666",
    marginRight: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 60,
  },
});
