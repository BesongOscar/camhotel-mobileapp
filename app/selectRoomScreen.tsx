import AppBar from "@/components/(homeExtras)/appBar";
import Button from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectRoom() {
  const { name, rating, price} = useLocalSearchParams() as {
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
        <Ionicons key="half" name="star-half" size={12} color="#FFD700" />
      );
    }
    return stars;
  };

  return (
    <SafeAreaView>
    {/* Header */}
      <View style={styles.header}>
        <AppBar
          name={"Select Room"}
          paddingHorizontal={0}
          paddingVertical={15}
        />
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
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{ }}
      >

      </ScrollView>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  hotelTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 4,
    color: "#000",
  },
  detailBoxContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  detailBox1: {
    height: 45,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#00ee",
    width: "50%",
    borderWidth: 1,
  },
  detailBox2: {
    height: 45,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: "50%",
    borderColor: "#00ee",
    borderWidth: 1,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceSection: {
    flex: 1,
  },
  startFromText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#00ee",
  },
  priceLittleText: {
    color: "grey",
    fontSize: 10,
  },
});
