import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

export const PrivacyPolicyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
   content: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary,
    marginTop: 4,
    lineHeight: 20,
  },
});
