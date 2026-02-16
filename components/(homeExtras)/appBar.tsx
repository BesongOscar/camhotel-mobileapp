import { View, Text, StyleSheet } from "react-native";
import ArrowBack from "@/components/arrowback";
import { appBarStyles as styles } from "@/styles/components/(homeExtras)/appBar";

type AppBarProps = {
  name?: String;
  paddingHorizontal?: number;
  paddingVertical?: number;
};
export default function AppBar({ name, paddingHorizontal, paddingVertical }: AppBarProps) {
  return (
    <View style={[styles.container, {paddingHorizontal, paddingVertical}]}>
      <ArrowBack />
      <Text style={styles.appBarTitle}>{name}</Text>
    </View>
  );
}


