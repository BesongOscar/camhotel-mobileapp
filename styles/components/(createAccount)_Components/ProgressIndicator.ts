import { StyleSheet } from "react-native";
export const progressIndicatorStyles = StyleSheet.create({
  Progresscontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 25,
    marginHorizontal: 42,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 10,
  },
  line: {
    flex: 1,
    height: 3,
  },
});
