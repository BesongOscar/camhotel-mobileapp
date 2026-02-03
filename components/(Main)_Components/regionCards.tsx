import { Text, View, Image, StyleSheet } from "react-native";
import { regionCardStyles as styles } from "@/styles/components/(Main)_Components/regionCard";

type RegionCardProps = {
  regionCapital: string;
  hotelNumber: number;
};
export default function RegionCard({
  regionCapital,
  hotelNumber,
}: RegionCardProps) {
  const placeholder = null;
  return (
    <View>
      <Image style={styles.imageholder} />
      <Text style={{ fontSize: 15, paddingLeft: 5 }}>{regionCapital}</Text>
      <Text style={{ color: "grey", paddingLeft: 5 }}>
        {hotelNumber} Hotels
      </Text>
    </View>
  );
}

