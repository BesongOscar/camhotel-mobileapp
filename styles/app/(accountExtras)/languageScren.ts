import { StyleSheet } from "react-native";

export const languageScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10
    }, 
    Title: {
        fontSize: 18,
        fontWeight: "500",
        letterSpacing: 0.2
    },
     optionsContainer: {
    marginTop: 8,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
  },

  selectedRow: {
    backgroundColor: "#F2F6FF", // light blue highlight
  },

  icon: {
    fontSize: 22,
    marginRight: 12,
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#1F2937",
  },

  radio: {
    fontSize: 18,
    color: "#00ee", // primary blue
    fontWeight: "600",
  },
})