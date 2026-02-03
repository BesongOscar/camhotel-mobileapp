import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "@/app/(main)/Home";
import { useFavorites } from "@/src/context/FavoritesContext";
import { useRouter } from "expo-router";
import { hotelCardStyles as styles } from "@/styles/components/(Main)_Components/hotelCard";

// Hotel Card Props
type HotelCardProps = {
  id: string;
  name: string;
  location: string;
  rating: number;
  ratingStars: string;
  price: number;
  currency: string;
  reviews: string;
  image: string;
  style?: object;
};

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  location,
  rating,
  price,
  image,
  reviews,
  style,
  currency,
}) => {
  const router = useRouter();


  
  //render star icons
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
  const { state, dispatch } = useFavorites();
  const isFavorite = state.favorites.includes(id);
  const handleFavoiteToggle = () => {
    dispatch({ type: "TOGGLE_FAVORITE", hotelId: id });
  }

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      activeOpacity={0.8}
      onPress={() =>
        router.push({
          pathname: "/hotelDetailScreen",
          params: { name, rating, location, price, image, reviews },
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.cardImage} />

        {/* Favorite Heart Button */}
        <TouchableOpacity
          style={styles.heartButton}
          onPress={(e) => {
            e.stopPropagation(); // prevent card navigation
            handleFavoiteToggle();
          }}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={22}
            color={isFavorite ? "red" : "grey"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.hotelDetail}>
          <Text style={styles.hotelName}>{name}</Text>
          <View style={styles.hotelStar}>{renderStars(rating)}</View>
        </View>
        <Text style={styles.hotelLocation}>
          <Ionicons name="location" size={10} color="grey" /> {location}
        </Text>

        <View style={styles.hotelreviewDetails}>
          <View style={styles.hotelratingContainer}>
            <Text style={styles.hotelRating}>{rating}/10</Text>
          </View>
          <Text style={styles.hotelRemark}>Excellent</Text>
          <Text style={styles.hotelReview}>{reviews}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.hotelPriceDetails}>
            <Text style={styles.hotelPrice}>
              {currency}
              {price}
            </Text>
            <Text style={styles.hotelPriceDescription}>per night</Text>
            <Text style={styles.hotelPriceDescription}>
              {price.toLocaleString()} total
            </Text>
            <Text style={styles.hotelPriceDescription}>
              including extra fees
            </Text>
          </View>
          <Ionicons name="chevron-forward-circle" size={25} color={"#00ee"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;


