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
              Search destination / Hotel name
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
            label="All"
            height={40}
            width={80}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label="Popular"
            height={40}
            width={100}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label="NearBy"
            height={40}
            width={100}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label="PriceUp"
            height={40}
            width={100}
          />
          <Button
            theme="tertiary"
            onPress={() => {}}
            label="PriceDown"
            height={40}
            width={100}
          />
        </ScrollView>
      </View>

      <View style={styles.divider} />

      {/* Hotels Section  <View style={localstyles.informationContainer}></View> ,*/}
      <View style={{ marginTop: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Hotels in Buea
          </Text>
          <Text style={{ color: "grey" }}>234 results</Text>
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

