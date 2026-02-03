import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
 import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

// Types
interface Hotel {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  location: string;
  rating: string;
  price: string;
  image: string;
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

  const hotels: Hotel[] = [
    {
      id: "1",
      name: "WDC Apart Hotel",
      latitude: 4.157,
      longitude: 9.240,
      location: "Buea - Mile 18 Bolifamba",
      rating: "8.4/10 Excellent (54 reviews)",
      price: "XAF 35000",
      image: "https://via.placeholder.com/300x200.png?text=WDC+Hotel",
    },
    {
      id: "2",
      name: "Rovie Estate",
      latitude: 4.150,
      longitude: 9.230,
      location: "Buea - 1.7 km from Tiko Golf Club",
      rating: "8.3/10 Great (60 reviews)",
      price: "XAF 20000",
      image: "https://via.placeholder.com/300x200.png?text=Rovie+Estate",
    },
  ];

  const handlePlaceSelect = async (
    data: any,
    details: any = null
  ) => {
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
    const hotelRegion = {
      latitude: hotel.latitude,
      longitude: hotel.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setRegion(hotelRegion);
    mapRef.current?.animateToRegion(hotelRegion, 1000);
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
        language: 'en',
      }}
      styles={{
        container: {
          flex: 1,
        },
        textInput: styles.textInput,
        listView: {
          position: 'absolute',
          top: 45,
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      currentLocation={false}
      debounce={200}
      enablePoweredByContainer={false}
      onFail={(error: Error) => {
        console.error('Google Places error:', error);
        setError('Failed to search locations');
      }}
      onNotFound={() => {
        setError('No locations found');
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
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={22} color="#000" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        {renderGooglePlaces()}

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
      <MapView/>

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0057ff" />
          <Text style={styles.loadingText}>Loading location...</Text>
        </View>
      )}

      {/* Bottom hotel cards */}
      <View style={styles.cardContainer}>
        {/* <FlatList
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
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  map: { 
    flex: 1 
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 3,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    width: width - 30,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 12,
    zIndex: 2,
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textInput: {
    height: 40,
    fontSize: 15,
    color: '#000',
  },
  filterBtn: {
    backgroundColor: "#0057ff",
    borderRadius: 8,
    padding: 8,
    marginLeft: 4,
  },
  cardContainer: {
    position: "absolute",
    bottom: 25,
    left: 15,
    right: 15,
  },
  card: {
    backgroundColor: "#fff",
    width: 220,
    borderRadius: 12,
    marginHorizontal: 8,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: { 
    width: "100%", 
    height: 120 
  },
  cardTitle: { 
    fontWeight: "700", 
    fontSize: 14, 
    marginBottom: 2 
  },
  cardSubtitle: { 
    fontSize: 12, 
    color: "#555" 
  },
  cardRating: { 
    fontSize: 12, 
    color: "#0066ff", 
    marginTop: 3 
  },
  cardPrice: { 
    fontSize: 13, 
    fontWeight: "700", 
    marginTop: 5 
  },
  errorContainer: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    zIndex: 2,
  },
  errorText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  loadingContainer: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  loadingText: {
    color: "#0057ff",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 8,
  },
  noResultsContainer: {
    padding: 10,
    alignItems: 'center',
  },
  noResultsText: {
    color: '#666',
    fontSize: 14,
  },
});