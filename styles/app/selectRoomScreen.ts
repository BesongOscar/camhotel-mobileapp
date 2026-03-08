import { StyleSheet } from "react-native";
import { colors } from "@/src/themes";

const PRIMARY = colors.primary;
export const SelectRoomScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "absolute",
  },
  hotelTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 4,
    color: colors.textPrimary,
  },
  detailBoxContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  detailBox1: {
    height: 45,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: PRIMARY,
    width: "50%",
    borderWidth: 1,
  },
  detailBox2: {
    height: 45,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: "50%",
    borderColor: PRIMARY,
    borderWidth: 1,
  },
  bottomBar: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderColor: colors.buttonBorder,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceSection: {
    flex: 1,
  },
  startFromText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: PRIMARY,
  },
  priceLittleText: {
    color: "grey",
    fontSize: 10,
  },
});
