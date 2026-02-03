import { StyleSheet } from "react-native";
export const liveLocationModalStyles = StyleSheet.create({
  ModalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  ModalBox: {
    width: "85%",
    height: 290,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 25,
    backgroundColor: "white",
    borderRadius: 5,
  },
  ModalText: {
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  iconContainer: {
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#eee",
    padding: 10,
    borderRadius: 100,
  },
});
