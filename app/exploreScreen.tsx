import HotelCard from "@/components/(Main)_Components/hotelCard";
import ExploreScreenButton from "@/components/(Main)_Components/exploreScreenButtons";
import ArrowBack from "@/components/arrowback";
import hotels from "@/constants/hotelCard";
import { exploreScreenStyles as styles } from "@/styles/app/exploreScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/src/themes";
import { useTranslation } from "@/src/hooks/Usetranslation";

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
  const { t } = useTranslation();
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

  const { destination, checkInDate, checkOutDate, guestInfo } =
    useLocalSearchParams() as {
      destination?: string;
      checkInDate?: string;
      checkOutDate?: string;
      guestInfo?: string;
    };

  // Safely parse "MM/DD/YYYY" format
  const parseDate = (str?: string): Date | null => {
    if (!str) return null;
    const parts = str.split("/");
    if (parts.length !== 3) return null;
    const [month, day, year] = parts;
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  // Convert "MM/DD/YYYY" → "15 April"
  const formatDisplayDate = (str?: string): string => {
    const date = parseDate(str);
    if (!date) return "--";
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    return `${day} ${month}`;
  };

  // Compute number of nights
  const computeNights = (): number => {
    const checkInParsed = parseDate(checkInDate);
    const checkOutParsed = parseDate(checkOutDate);
    if (!checkInParsed || !checkOutParsed) return 0;
    const diff = checkOutParsed.getTime() - checkInParsed.getTime();
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
  };
  const nights = computeNights();

  // Parse number of rooms from guestInfo string
  // guestInfo format: "2 Adults, 1 Children, 1 Room"
  const parseRooms = (info?: string): number => {
    if (!info) return 1;
    const match = info.match(/(\d+)\s+Room/i);
    return match ? parseInt(match[1], 10) : 1;
  };
  const roomCount = parseRooms(guestInfo);

  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      {/* AppBar */}
      <View style={styles.AppBar}>
        {/* Header */}
        <View style={styles.AppBarHeader}>
          <ArrowBack />
          <Text style={styles.AppBarTitle}>{destination || t("exploreScreen.searchResults")}</Text>
        </View>

        {/* Separator */}
        <View style={styles.Separator} />

        {/* Reservation Block — 2 columns */}
        <View style={styles.reservationBlock}>

          {/* Column 1: Check in + Check out dates, then Nights box */}
          <View style={styles.reservationColumn}>

            {/* Check in & Check out side by side */}
            <View style={styles.datesRow}>
              <View style={styles.dateCell}>
                <Text style={styles.infoLabel}>{t("exploreScreen.checkIn")}</Text>
                <Text style={styles.infoValue}>{formatDisplayDate(checkInDate)}</Text>
              </View>
              
              <View style={styles.dateCell}>
                <Text style={styles.infoLabel}>{t("exploreScreen.checkOut")}</Text>
                <Text style={styles.infoValue}>{formatDisplayDate(checkOutDate)}</Text>
              </View>
            </View>

            {/* Nights detail box */}
            <Pressable style={styles.detailBox}>
              <View style={styles.detailBoxInner}>
                <Ionicons name="calendar-outline" size={16} color={colors.textSecondary} />
                <Text style={styles.detailText}>
                  {nights} {nights === 1 ? t("exploreScreen.night") : t("exploreScreen.nights")}
                </Text>
              </View>
              <Ionicons name="chevron-down" size={16} color={colors.textPrimary} />
            </Pressable>

          </View>

          {/* Column 2: Guest info, then Rooms box */}
          <View style={styles.reservationColumn}>

            {/* Guest info */}
            <View>
              <Text style={styles.infoLabel}>{t("exploreScreen.guest")}</Text>
               <Text style={styles.infoValue}>
                {guestInfo
                  ? guestInfo.replace(/,?\s*\d+\s+Rooms?/i, "").trim()
                  : `1 ${t("exploreScreen.guest")}`}
              </Text>
            </View>

            {/* Rooms detail box */}
            <Pressable style={styles.detailBox}>
              <View style={styles.detailBoxInner}>
                <MaterialIcons name="meeting-room" size={16} color={colors.textSecondary} />
                <Text style={styles.detailText}>
                  {roomCount} {roomCount === 1 ? t("exploreScreen.room") : t("exploreScreen.rooms")}
                </Text>
              </View>
              <Ionicons name="chevron-down" size={16} color={colors.textPrimary} />
            </Pressable>

          </View>

        </View>
      </View>

      {/* Action Buttons */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <ExploreScreenButton name={t("exploreScreen.sort")} iconName="arrow-up" />
        <ExploreScreenButton name={t("exploreScreen.filter")} iconName="filter" />
        <ExploreScreenButton name={t("exploreScreen.map")} iconName="map-outline" />
      </View>

      {/* Separator */}
      <View style={styles.Separator} />

      {/* Hotels List */}
      <View style={{ paddingHorizontal: 15, flex: 1 }}>
        <View style={styles.hotelsFoundRow}>
          <Text style={styles.hotelsFoundText}>{t("exploreScreen.hotelsFound")}</Text>
          <Text style={styles.resultsText}>{hotels.length} {t("exploreScreen.results")}</Text>
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