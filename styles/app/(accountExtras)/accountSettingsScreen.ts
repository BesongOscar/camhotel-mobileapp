import { StyleSheet } from "react-native";

export const AccountSettingsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    marginVertical: 10
  },
  switchtab: {
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  switchtabText: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.2,
  }
});
