import { StyleSheet } from "react-native";

export const FAQItemStyles = StyleSheet.create({
  faqContainer: {
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D6D6E0",
    marginBottom: 15,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqTitle: {
    fontSize: 14,
  },
  faqContent: {
    marginTop: 10,
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
  },
});
