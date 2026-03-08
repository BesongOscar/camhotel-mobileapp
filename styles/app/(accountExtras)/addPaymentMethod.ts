import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

const PRIMARY = colors.primary;
export const AddPaymentMethodStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 0.2,
    paddingBottom: 10,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 6,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY,
  },
  radioLabel: {
    fontSize: 16,
  },
  subLabel: {
    marginTop: 15,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "500",
  },
  operatorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  operatorCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: colors.buttonBorder,
    borderRadius: 5,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  operatorSelected: {
    borderColor: PRIMARY,
  },
  operatorText: {
    marginLeft: 8,
  },
  radioSmall: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  radioInnerSmall: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PRIMARY,
  },
  phoneRow: {
    flexDirection: "row",
    marginBottom: 35,
  },
  countryBox: {
    borderColor: "black",
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  cardIcons: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  cardBadge: {
    backgroundColor: colors.textPrimary,
    color: colors.background,
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    marginLeft: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  button: {
    backgroundColor: PRIMARY,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",

    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: colors.background,
    fontWeight: "600",
    fontSize: 16,
  },
});
