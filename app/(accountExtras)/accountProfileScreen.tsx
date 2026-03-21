import { accountProfileScreenStyles as styles } from "@/styles/app/(accountExtras)/accountProfileScreen";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreenTab from "@/components/(accountExtras)/profileScreenTab";
import { useFavorites } from "@/src/context/FavoritesContext";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors,spacing,typography } from "@/src/themes";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function AccountProfile() {
    const router = useRouter();
    const { state } = useFavorites();
    const { t } = useTranslation();

    const favoriteCount = state.favorites.length;
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Image and Edit Button */}
        <View style={styles.AvaterContainer}>
          <Image style={styles.avatar} />
          <View style={styles.CameraIconContainer}>
            <Pressable onPress={() => {}}>
              <Ionicons name="camera" size={28} color={colors.primary} />
            </Pressable>
          </View>
        </View>

        {/* user name and varification status*/}
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Besong Oscar</Text>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
        </View>
        {/* Email */}
        <Text style={styles.userEmail}>Wildeo963@gmail.com</Text>
        {/* Stats row */}
        <View style={styles.statsRow}>
          {/* Total Bookings */}
          <View style={styles.totalBookingsContainer}>
            <Text style={styles.totalBookingsText}>{t("accountProfileScreen.totalBookings")}</Text>
            <View
              style={styles.statsNumberContainer}
            >
              <Text style={styles.totalBookingNumber}>12</Text>
              <Ionicons name="calendar" color={colors.textPrimary} size={20} />
            </View>
          </View>
          {/* Favorite Hotels */}
          <View style={styles.favouriteHotelContainer}>
            <Text style={styles.favouriteHotelText}>{t("accountProfileScreen.favoriteHotels")}</Text>
            <View
              style={styles.statsNumberContainer}
            >
              <Text style={styles.favouriteHotelNumber}>{favoriteCount}</Text>
              <Ionicons name="heart" color={colors.textPrimary} size={20} />
            </View>
          </View>
          {/* Total Reviews */}
          <View style={styles.totalReviewsContainer}>
            <Text style={styles.totalReviewsText}>{t("accountProfileScreen.totalReviews")}</Text>
            <View
              style={styles.statsNumberContainer}
            >
              <Text style={styles.totalReviewsNumber}>8</Text>
              <Ionicons name="chatbubble" color={colors.textPrimary} size={20} />
            </View>
          </View>
        </View>
      </View>

      <ProfileScreenTab tabName={t("accountProfileScreen.myReviews")} onPress={() => {}} />
      <ProfileScreenTab tabName={t("accountProfileScreen.editProfile")} onPress={() => {}} />
    </SafeAreaView>
  );
}
