import Button from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectRoomScreenStyles as styles } from "@/styles/app/selectRoomScreen";

export default function SelectRoom() {
  const { name, rating, price } = useLocalSearchParams() as {
    name: string;
    rating: string | number;
    price: string;
  };
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 5; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={12} color="#FFD700" />);
    }
    if (halfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={12} color="#FFD700" />,
      );
    }
    return stars;
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.hotelTitle}>{name}</Text>
          <Text>{renderStars(Number(rating) || 0)}</Text>
        </View>
        <View style={styles.detailBoxContainer}>
          <View style={styles.detailBox1}></View>
          <View style={styles.detailBox2}></View>
        </View>
      </View>
      {/* Hotel Rooms Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      ></ScrollView>
      {/* BOTTOM BAR - Fixed*/}
      <View style={styles.bottomBar}>
        <View style={styles.priceSection}>
          <Text style={styles.startFromText}>Start from</Text>
          <Text style={styles.priceText}>XAF {price}</Text>
          <Text style={styles.priceLittleText}>1 night - XAF {price}</Text>
        </View>

        <Button theme="secondary" label="Reserve" height={50} width={170} />
      </View>
    </SafeAreaView>
  );
}
  
