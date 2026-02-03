import { StyleSheet } from "react-native";
export const guestAndRoomsStyles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 17,
    fontWeight: "700",
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
  },
  counterRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 6,
    height: 30,
    width: 30,
    backgroundColor: "#f2f2ff",
    borderColor: "#00ee",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    height: 30,
    width: 40,
    backgroundColor: "#f2f2ff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  disabledButton: {
    opacity: 0.4,
  },
});
