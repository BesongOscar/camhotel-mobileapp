import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { favoriteHotelCardsStyles as styles } from "@/styles/components/(accountExtras)/favoriteHotelCards";
import { useFavorites } from "@/src/context/FavoritesContext";
import { colors } from "@/src/themes";

type favoriteHotelCardProps = {
  hotel: {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    image: string;
  };
};
export default function FavoriteHotelCards({ hotel }: favoriteHotelCardProps) {
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
  const router = useRouter();
  const { dispatch } = useFavorites();
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => {
        router.push({
          pathname: "/(homeExtras)/hotelDetailScreen",
          params: hotel,
        });
      }}
    >
      <Image source={{ uri: hotel.image }} style={styles.cardImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{hotel.name}</Text>
        {/* render Stars */}
        <View style={styles.starsRow}>{renderStars(hotel.rating)}</View>
        {/* location */}
        <View style={styles.locationRow}>
          <Ionicons name="location" color={"grey"} size={15} />
          <Text style={styles.locationText}>{hotel.location}</Text>
        </View>
        {/* ratings and reviews */}
        <View style={styles.ratingRow}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{hotel.rating}/10</Text>
          </View>
          <Text style={styles.reviewsText}>Excellent ({hotel.reviews})</Text>
        </View>
      </View>
       {/* trailing icons */}
        <View style={styles.trailingIcons}>
          <Pressable>
            <Ionicons name="heart" color={colors.error} size={20} />
          </Pressable>
          <Ionicons name="chevron-forward" size={20} color={colors.primary} />
        </View>
    </Pressable>
  );
}
