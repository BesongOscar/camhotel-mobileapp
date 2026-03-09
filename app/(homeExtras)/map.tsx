import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView from "react-native-maps";
import hotels from "@/constants/hotelCard";
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

export default function ExploreMapScreen() {
  const navigation = useNavigation();
  const [region, setRegion] = useState<Region>({
    latitude: 4.1527,
    longitude: 9.2416,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mapRef = useRef<MapView | null>(null);
  const placesRef = useRef<any>(null);

  const handlePlaceSelect = async (data: any, details: any = null) => {
    setLoading(true);
    setError(null);

    try {
      if (details?.geometry?.location) {
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;

        const newRegion = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };

        setRegion(newRegion);
        mapRef.current?.animateToRegion(newRegion, 1000);
      }
    } catch (err) {
      setError("Failed to load location");
      console.error("Error selecting place:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerPress = (hotel: Hotel) => {
    if (hotel.latitude && hotel.longitude) {
      const hotelRegion = {
        latitude: hotel.latitude,
        longitude: hotel.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(hotelRegion);
      mapRef.current?.animateToRegion(hotelRegion, 1000);
    }
  };

  const handleCardPress = (hotel: Hotel) => {
    handleMarkerPress(hotel);
  };

  const handleBack = () => {
    navigation.goBack();
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
        },
        description: {
          fontWeight: "bold",
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      currentLocation={false}
      debounce={200}
      enablePoweredByContainer={false}
      onFail={(error: Error) => {
        console.error("Google Places error:", error);
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
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={22} color="#000" />
      </TouchableOpacity>

      {/* Search Bar column*/}
      <View style={styles.searchBarColumn}>
        {/* search bar */}
        <View style={styles.searchContainer}>{renderGooglePlaces()}</View>
        {/* Filter Button */}
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Error Message */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {/* Map */}
      <MapView ref={mapRef} style={styles.map} region={region} />

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0057ff" />
          <Text style={styles.loadingText}>Loading location...</Text>
        </View>
      )}

      {/* Bottom hotel cards */}
      <View style={styles.cardContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hotels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress(item)}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={{ padding: 8 }}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.location}</Text>
                <Text style={styles.cardRating}>{item.rating}</Text>
                <Text style={styles.cardPrice}>{item.price} / night</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
