import { StyleSheet } from "react-native";

export const  KYCVerificationStyles= StyleSheet.create({
  ModalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBoxContent: {
    flexDirection: "column",
    backgroundColor: "white",
    height: 320,
    width: "80%",
    paddingVertical: 45,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  imageContainer: {
    height: 100,
    width: "65%",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  modalText: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 40,
    marginTop: 12,
    textAlign: "center",
  },
});
