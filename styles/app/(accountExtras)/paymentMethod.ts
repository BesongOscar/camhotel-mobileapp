import { StyleSheet } from "react-native";

export const PaymentMethodStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  Title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.2,
    paddingBottom: 10
  },
  AddPaymentButton: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 150,
    gap: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: '80%',
  },
  AddPaymentLabel: {
    fontSize: 15,
    color: "black",
    fontWeight: "400",
  },
});
