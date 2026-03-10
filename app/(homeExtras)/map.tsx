import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef, useState, useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import hotels from "@/constants/hotelCard";
import HotelCard from "@/components/(Main)_Components/hotelCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { mapStyles as styles } from "@/styles/app/(homeExtras)/map";

// Types
interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  ratingStars: string;
  price: number;
  currency: string;
  reviews: string;
  image: string;
  latitude?: number;
  longitude?: number;
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

// Environment variable (replace with your actual environment setup)
const GOOGLE_PLACES_API_KEY = "AIzaSyCEOOToO0gfuOoq1Mx9Ej3H_FMKwiYKhjs";

// Custom map pin with hotel name label above a location icon
const HotelMapMarker = ({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) => (
  <View style={markerStyles.wrapper}>
    <Text
      style={[markerStyles.label, selected && markerStyles.labelSelected]}
      numberOfLines={1}
    >
      {name}
    </Text>
    <Ionicons
      name="location"
      size={30}
      color={selected ? "#0057ff" : "#e05c6e"}
    />
  </View>
);

const markerStyles = StyleSheet.create({
  wrapper: { alignItems: "center" },
  label: {
    backgroundColor: "rgba(255,255,255,0.93)",
    color: "#111",
    fontSize: 11,
    fontWeight: "700",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 2,
    maxWidth: 130,
    overflow: "hidden",
  },
  labelSelected: { backgroundColor: "#0057ff", color: "#fff" },
});

export default function ExploreMapScreen() {
  const router = useRouter();
  const [region, setRegion] = useState<Region>({
    latitude: 4.1527,
    longitude: 9.2416,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);

  const mapRef = useRef<MapView | null>(null);
  const placesRef = useRef<any>(null);
  const flatListRef = useRef<FlatList | null>(null);

  const filteredHotels: Hotel[] = searchQuery.trim()
    ? hotels.filter(
        (h) =>
          h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          h.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : hotels;

  // Auto-fit map whenever search query changes
  useEffect(() => {
    if (!searchQuery.trim()) return;

    const coords = filteredHotels
      .filter((h) => h.latitude && h.longitude)
      .map((h) => ({ latitude: h.latitude!, longitude: h.longitude! }));

    if (coords.length === 0) return;

    if (coords.length === 1) {
      const singleRegion: Region = {
        latitude: coords[0].latitude,
        longitude: coords[0].longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      };
      setRegion(singleRegion);
      mapRef.current?.animateToRegion(singleRegion, 600);
      setSelectedHotelId(filteredHotels[0].id);
    } else {
      mapRef.current?.fitToCoordinates(coords, {
        edgePadding: { top: 160, right: 40, bottom: 280, left: 40 },
        animated: true,
      });
      setSelectedHotelId(null);
    }
  }, [searchQuery]);

  const handlePlaceSelect = async (data: any, details: any = null) => {
    setLoading(true);
    setError(null);
    const query =
      data?.description || data?.structured_formatting?.main_text || "";
    setSearchQuery(query);

    try {
      const matchedHotel = hotels.find(
        (h) =>
          h.name.toLowerCase().includes(query.toLowerCase()) ||
          h.location.toLowerCase().includes(query.toLowerCase()),
      );

      if (matchedHotel?.latitude && matchedHotel?.longitude) {
        const hotelRegion: Region = {
          latitude: matchedHotel.latitude,
          longitude: matchedHotel.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        };
        setRegion(hotelRegion);
        setSelectedHotelId(matchedHotel.id);
        mapRef.current?.animateToRegion(hotelRegion, 1000);
        const index = filteredHotels.findIndex((h) => h.id === matchedHotel.id);
        if (index !== -1) {
          setTimeout(
            () => flatListRef.current?.scrollToIndex({ index, animated: true }),
            400,
          );
        }
      } else if (details?.geometry?.location) {
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        const newRegion: Region = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        setRegion(newRegion);
        setSelectedHotelId(null);
        mapRef.current?.animateToRegion(newRegion, 1000);
      }
    } catch (err) {
      setError("Failed to load location");
    } finally {
      setLoading(false);
    }
  };

  const handleCardPress = (hotel: Hotel) => {
    if (hotel.latitude && hotel.longitude) {
      const hotelRegion: Region = {
        latitude: hotel.latitude,
        longitude: hotel.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(hotelRegion);
      setSelectedHotelId(hotel.id);
      mapRef.current?.animateToRegion(hotelRegion, 1000);
    }
  };

  const handleMarkerPress = (hotel: Hotel) => {
    setSelectedHotelId(hotel.id);
    const index = filteredHotels.findIndex((h) => h.id === hotel.id);
    if (index !== -1) {
      setTimeout(
        () => flatListRef.current?.scrollToIndex({ index, animated: true }),
        200,
      );
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedHotelId(null);
    placesRef.current?.clear();
    const allCoords = hotels
      .filter((h) => h.latitude && h.longitude)
      .map((h) => ({ latitude: h.latitude!, longitude: h.longitude! }));
    if (allCoords.length > 0) {
      mapRef.current?.fitToCoordinates(allCoords, {
        edgePadding: { top: 160, right: 40, bottom: 280, left: 40 },
        animated: true,
      });
    }
  };

  const handleBack = () => {
    router.back();
  };

  // Custom render for Google Places to handle the filter error
  const renderGooglePlaces = () => (
    <GooglePlacesAutocomplete
      ref={placesRef}
      placeholder="Search destination / Hotel name"
      fetchDetails={true}
      onPress={handlePlaceSelect}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: "en",
      }}
      styles={{
        container: {
          flex: 1,
        },
        textInput: styles.textInput,
        listView: {
          position: "absolute",
          top: 45,
          backgroundColor: "#fff",
          borderRadius: 10,
          elevation: 6,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.12,
          shadowRadius: 6,
          zIndex: 10,
        },
        description: {
          fontWeight: "bold",
          fontSize: 13,
        },
        row: { paddingVertical: 10, paddingHorizontal: 12 },
        separator: { height: 1, backgroundColor: "#f0f0f0" },
      }}
      currentLocation={false}
      debounce={400}
      minLength={3}
      enablePoweredByContainer={false}
      onFail={(err: Error) => {
        const msg = err?.message?.toLowerCase() ?? "";
        if (
          msg.includes("aborted") ||
          msg.includes("cancel") ||
          msg.includes("billing")
        )
          return;
        setError("Failed to search locations");
      }}
      onNotFound={() => {
        setError("No locations found");
      }}
      listEmptyComponent={
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No locations found</Text>
        </View>
      }
      textInputProps={{
        onFocus: () => setError(null),
        onChangeText: (text: string) => setSearchQuery(text),
        value: searchQuery,
        clearButtonMode: "never",
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* MAP — full screen base */}
      <MapView ref={mapRef} style={styles.map} region={region} mapType="standard">
        {filteredHotels.map(
          (hotel) =>
            hotel.latitude &&
            hotel.longitude && (
              <Marker
                key={hotel.id}
                coordinate={{
                  latitude: hotel.latitude,
                  longitude: hotel.longitude,
                }}
                onPress={() => handleMarkerPress(hotel)}
                tracksViewChanges={false}
              >
                <HotelMapMarker
                  name={hotel.name}
                  selected={selectedHotelId === hotel.id}
                />
              </Marker>
            ),
        )}
      </MapView>

      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={20} color="#111" />
      </TouchableOpacity>

      {/* SEARCH BAR + FILTER */}
      <View style={styles.searchBarRow}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="location-outline"
            size={18}
            color="#0057ff"
            style={{ marginLeft: 10 }}
          />
          {renderGooglePlaces()}
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={handleClearSearch}
            >
              <Ionicons name="close-circle" size={17} color="#bbb" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* RESULTS BADGE */}
      {searchQuery.trim().length > 0 && (
        <View style={styles.resultsBadge}>
          <Text style={styles.resultsBadgeText}>
            {filteredHotels.length} hotel
            {filteredHotels.length !== 1 ? "s" : ""} found
          </Text>
        </View>
      )}

      {/* ERROR */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {/* LOADING */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#0057ff" />
          <Text style={styles.loadingText}>Searching...</Text>
        </View>
      )}

      {/* Bottom hotel cards */}
      <View style={styles.cardContainer}>
        {filteredHotels.length === 0 ? (
          <View style={styles.noHotelsContainer}>
            <Ionicons name="search-outline" size={18} color="#999" />
            <Text style={styles.noHotelsText}>No hotels match your search</Text>
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredHotels}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            onScrollToIndexFailed={() => {}}
            renderItem={({ item }) => (
              <HotelCard
                id={item.id}
                name={item.name}
                location={item.location}
                rating={item.rating}
                ratingStars={item.ratingStars}
                price={item.price}
                currency={item.currency}
                reviews={item.reviews}
                image={item.image}
                style={[
                  styles.mapCard,
                  selectedHotelId === item.id && styles.mapCardSelected,
                ]}
                onPress={() => handleCardPress(item)}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
