import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//import styles from "@/utility/styles";
import HotelCard from "@/components/(Main)_Components/hotelCard";
import { useFavorites } from "@/src/context/FavoritesContext";
import InformationCotainer from "@/components/(Main)_Components/informationContainer";
import RegionCard from "@/components/(Main)_Components/regionCards";
import Button from "@/components/button";
import hotels from "@/constants/hotelCard";
import regions from "@/constants/regions";
import { useTranslation } from "@/src/hooks/Usetranslation";

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

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation();
  // const handleRegionPress = (regionName: string, regionCapital: string, hotelNumber: number) => {
  //   router.push({
  //     pathname: "/exploreScreen",
  //     params: {
  //       capital: regionCapital,
  //       name: regionName,
  //       number: hotelNumber
  //     },
  //   });
  // };

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
      image={item.image}
      ratingStars={item.ratingStars}
      price={item.price}
      currency={item.currency}
      style={{ flex: 1, margin: 5 }}
    />
  );

  const { state } = useFavorites();
  console.log("Favorite Hotels IDs:", state.favorites);

  return (
    <FlatList
      data={hotels}
      keyExtractor={(item) => item.id}
      renderItem={renderHotelCard}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 20 }}
      ListHeaderComponent={
        <>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 10 }}>
            {t("homeScreen.heroTitle")}
          </Text>
          <Text style={{ color: "grey", marginBottom: 7 }}>
            {t("homeScreen.heroSubtitle")}
          </Text>
          <InformationCotainer />

          {/* Favourite Destinations */}
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {t("homeScreen.favouriteDestinationsTitle")}
          </Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            {t("homeScreen.favouriteDestinationsSubtitle")}
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 15 }}
          >
            {regions.map((region) => (
              <TouchableOpacity
                key={region.capital}
                activeOpacity={0.8}
                onPress={() => {}}
              >
                <RegionCard
                  regionCapital={region.capital}
                  hotelNumber={region.Number}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Top Hotels Section Header */}
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {t("homeScreen.topHotelsTitle")}
          </Text>
          <Text style={{ color: "grey", marginBottom: 5 }}>
            {t("homeScreen.topHotelsSubtitle")}
          </Text>
        </>
      }
      ListFooterComponent={
        <>
          <View
            style={{ paddingTop: 20, paddingBottom: 40, alignItems: "center" }}
          >
            <Button
              theme="secondary"
              label={t("homeScreen.findMore")}
              height={40}
              width={100}
            />
          </View>
        </>
      }
    />
  );
};

export default Home;
