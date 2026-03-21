import HotelCard from "@/components/(Main)_Components/hotelCard";
import Button from "@/components/button";
import hotels from "@/constants/hotelCard";
import { ExploreStyles as styles } from "@/styles/app/(main)/Explore";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
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

const Explore: React.FC = () => {
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
  const navigator = useRouter();
  const handlePush = () => {
    navigator.push("/selectDestinationScreen");
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.SearchContainer}>
        <TouchableOpacity style={styles.SearchButton} onPress={handlePush}>
          <View style={styles.SearchButtonContents}>
            <Ionicons name="location-outline" size={24} color="blue" />
            <Text style={{ color: "grey" }}>
              {t("exploreScreen.searchPlaceholder")}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.filterContainer}>
          <Ionicons name="filter-outline" size={24} color="white" />
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={{ height: 60 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingHorizontal: 5 }}
        >
          <Button
            theme="secondary"
            onPress={() => {}}
            label={t("exploreScreen.all")}
            height={40}
            width={80}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label={t("exploreScreen.popular")}
            height={40}
            width={100}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label={t("exploreScreen.nearby")}
            height={40}
            width={100}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label={t("exploreScreen.priceUp")}
            height={40}
            width={100}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label={t("exploreScreen.priceDown")}
            height={40}
            width={100}
          />
        </ScrollView>
      </View>

      <View style={styles.divider} />
      <View style={{ marginTop: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {t("exploreScreen.hotelsInLocation")}
          </Text>
          <Text style={{ color: "grey" }}>{hotels.length} {t("exploreScreen.results")}</Text>
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
    </View>
  );
};

export default Explore;

