// app/(mainExtras)/hotelDetailScreen.tsx
import AppBar from "@/components/(homeExtras)/appBar";
import Button from "@/components/button";
import hotels from "@/constants/hotelCard";
import { amenities } from "@/constants/amenities";
import { hotelDetailStyles as styles } from "@/styles/app/(homeExtras)/hotelDetailScreen";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFavorites } from "@/src/context/FavoritesContext";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/src/themes";

type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number | string;
  reviews: string | number;
  price: number | string;
  currency?: string;
  image: string;
  gallery?: string[];
  description?: string;
};

export default function HotelDetailScreen() {
  const { id, name, rating, currency, price, reviews, location } =
    useLocalSearchParams() as {
      id?: string;
      name?: string;
      rating?: string;
      currency?: string;
      price?: string;
      reviews?: string;
      location?: string;
    };
  const router = useRouter();
  const handleSelectRoom = () => {
    router.push({
      pathname: "/selectRoomScreen",
      params: {name, rating, price}
    });
  };
  const { state, dispatch } = useFavorites();
  const isFavorite = id ? state.favorites.includes(id) : false;

  const handleFavorite = () => {
    if (id) {
      dispatch({ type: "TOGGLE_FAVORITE", hotelId: id });
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 5; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={12} color={colors.warning} />);
    }
    if (halfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={12} color={colors.warning} />
      );
    }
    return stars;
  };

  // find hotel by id; fallback to first hotel if not found
  const hotel: Hotel =
    (id ? hotels.find((h: any) => String(h.id) === String(id)) : undefined) ??
    hotels[0];

  // build gallery (use hotel's gallery if available)
  const gallery =
    hotel.gallery && hotel.gallery.length > 0
      ? [hotel.image, ...hotel.gallery]
      : [hotel.image];

  // thumbnails: show first 4; show +N overlay if more
  const visibleThumbnails = gallery.slice(0, 4);
  const moreCount = gallery.length > 4 ? gallery.length - 4 : 0;

  // amenities
  // const renderAmenities = () => {
  //   return amenities.map((amenity, index) => (
  //     <View key={index} style={styles.amenityItem}>
  //       <MaterialCommunityIcons name={amenity.icon} size={20} color={colors.textPrimary} />
  //       <Text style={styles.amenityText}>{amenity.name}</Text>
  //     </View>
  //   ));
  // };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <AppBar name={name} paddingHorizontal={12} paddingVertical={12}/>
      {/* HERO IMAGE */}
      <View>
        <Image
          source={{ uri: hotel.image }}
          style={styles.hero}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.heartButton} onPress={handleFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={22}
            color={isFavorite ? colors.error : colors.textSecondary}
          />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title & location */}
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.hotelTitle}>{name}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-sharp" size={14} color="grey" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 5 }}>
            {renderStars(Number(rating) || 0)}
          </Text>
        </View>

        {/* Rating section */}
        <View style={styles.ratingSection}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingBadgeText}>{rating}/10</Text>
            </View>
            <Text style={styles.ratingLabel}> Excellent • {reviews}</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Text style={styles.seeReviews}>See reviews</Text>
          </TouchableOpacity>
        </View>

        {/* Available Reservation section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Reservation</Text>

          <View style={styles.reservationRow}>
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
                <Ionicons name="calendar-outline" size={16} color={colors.textPrimary} />
                <Text style={styles.detailText}>1 night</Text>
                <Ionicons
                  name="chevron-down"
                  size={16}
                  color={colors.textPrimary}
                  style={{ paddingLeft: 25 }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.resColumn}>
              <Text style={styles.resLabel}>Guest</Text>
              <Text>1 Adults, 0 Children</Text>
              <TouchableOpacity style={styles.detailBox}>
                <MaterialIcons name="meeting-room" size={24} color={colors.textPrimary} />
                <Text style={styles.detailText}>1 Room</Text>
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

        {/* Popular Amenities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Amenities</Text>

          <View style={styles.amenitiesGrid}>
            {amenities.map((amenity) => (
              <View key={amenity.key} style={styles.amenityItem}>
                <View style={styles.amenityIcon}>
                  <MaterialCommunityIcons
                    name={amenity.icon as any}
                    size={18}
                    color="#222"
                  />
                </View>
                <Text style={styles.amenityLabel}>{amenity.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Spacer for bottom bar */}
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* BOTTOM BAR - Fixed*/}
      <View style={styles.bottomBar}>
        <View style={styles.priceSection}>
          <Text style={styles.startFromText}>Start from</Text>
          <Text style={styles.priceText}>XAF {price}</Text>
          <Text style={styles.priceLittleText}>1 night - XAF {price}</Text>
        </View>

        <Button
          theme="secondary"
          label="Select Room"
          height={50}
          width={170}
          onPress={handleSelectRoom}
        />
      </View>
    </SafeAreaView>
  );
}

