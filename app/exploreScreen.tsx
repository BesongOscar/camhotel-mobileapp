import HotelCard from "@/components/(Main)_Components/hotelCard";
import ExploreScreenButton from "@/components/(Main)_Components/exploreScreenButtons";
import ArrowBack from "@/components/arrowback";
import hotels from "@/constants/hotelCard";
import {
  Ionicons,
  MaterialIcons
} from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/src/themes";

// Hotel type
type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  price: number;
  currency: string;
  image: string;
  ratingStars: string;
};

export default function ExploreScreen() {
  const renderHotelCard = ({
    item,
  }: {
    item: Hotel & { rating: string | number; price: string | number };
  }) => (
    <HotelCard
      id={item.id}
      name={item.name}
      location={item.location}
      rating={item.rating}
      reviews={item.reviews}
      ratingStars={item.ratingStars}
      price={item.price}
      currency={item.currency}
      image={item.image}
      style={{ flex: 1, margin: 5 }}
    />
  );
  const { name, capital, number } = useLocalSearchParams() as {
    name?: string;
    capital?: string;
    number?: number;
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
      <View style={styles.AppBar}>
        {/* Line */}
        <View style={styles.Separator} />
        {/* Header */}
        <View style={styles.AppBarHeader}>
          <ArrowBack/>
          <Text style={styles.AppBarTitle}>
            {capital},{name}
          </Text>
        </View>

        {/* Line */}
        <View style={styles.Separator} />

        {/* Reservation Row */}
        <View style={styles.reservationRow}>
          {/* Left Column */}
          <View style={styles.resColumn}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.resColumn}>
                <Text style={styles.resLabel}>Check in</Text>
                <Text style={styles.resDate}>15 April</Text>
              </View>

              <View style={styles.resSeparator}>
                <Ionicons name="arrow-forward" size={16} color={colors.textSecondary} />
              </View>

              <View style={styles.resColumn}>
                <Text style={styles.resLabel}>Check out</Text>
                <Text style={styles.resDate}>16 April</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.detailBox}>
              <Ionicons name="calendar-outline" size={16} color={colors.textSecondary} />
              <Text style={styles.detailText}>1 night</Text>
              <Ionicons
                name="chevron-down"
                size={16}
                color= {colors.textPrimary}
                style={{ paddingLeft: 25 }}
              />
            </TouchableOpacity>
          </View>

          {/* Right Column */}
          <View style={styles.resColumn}>
            <Text style={styles.resLabel}>Guest</Text>
            <Text>1 Adults, 0 Children</Text>

            <TouchableOpacity style={styles.detailBox}>
              <MaterialIcons name="meeting-room" size={24} color="black" />
              <Text style={styles.detailText}>1 Rooms</Text>
              <Ionicons
                name="chevron-down"
                size={16}
                color={colors.textPrimary}
                style={{ paddingLeft: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <ExploreScreenButton name="Sort" iconName="arrow-up" />
        <ExploreScreenButton name="Filter" iconName="filter" />
        <ExploreScreenButton name="Map" iconName="map-outline" />
      </View>

      {/* Line */}
      <View style={styles.Separator} />

      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text style={{}}>Hotels found</Text>
          <Text style={{}}>{number} results</Text>
        </View>
        <FlatList<Hotel>
          data={hotels}
          keyExtractor={(item) => item.id}
          renderItem={renderHotelCard}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    paddingVertical: 5,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
  },
  AppBarHeader: {
    flexDirection: "row",
    gap: 100,
    alignItems: "center",
  },
  AppBarTitle: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  Separator: {
    height: 1,
    backgroundColor: colors.background,
    marginBottom: 15,
    marginTop: 17,
  },
  reservationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 20,
  },
  resColumn: {
    flex: 1,
    paddingBottom: 5,
  },
  resLabel: {
    color: "grey",
    fontSize: 12,
    marginBottom: 4,
  },
  resDate: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.textPrimary,
  },
  resSeparator: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  detailBox: {
    borderWidth: 1,
    borderColor: colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.background,
    gap: 10,
    marginTop: 10,
  },
  detailText: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.textPrimary,
  },
});
