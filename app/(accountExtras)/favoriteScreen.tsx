import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFavorites } from "@/src/context/FavoritesContext";
import hotels from "@/constants/hotelCard";
import FavoriteHotelCards from "@/components/(accountExtras)/favoriteHotelCards";
import { favoriteScreenStyles as styles } from "@/styles/app/(accountExtras)/favoriteScreen";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function FavoriteScreen(){
    const {state} = useFavorites();
    const { t } = useTranslation();
    const favoriteHotels = hotels.filter(hotel => state.favorites.includes(hotel.id));
    return (
        <SafeAreaView edges={["top","bottom"]} style={styles.container}>
           <View style={styles.favoriteHotelsContainer}>
              <Text style={styles.favoriteHotelsText}>{t("favoriteScreen.favoriteHotels")}</Text>
              <Text style={styles.favoriteHotelsCount}>{favoriteHotels.length}</Text>
           </View>
           <FlatList
           data={favoriteHotels}
           keyExtractor={(item) => item.id}
           showsVerticalScrollIndicator={false}
           renderItem={({item}) =>(
            <FavoriteHotelCards hotel={item}/>
           )}
           />
        </SafeAreaView>
    )
}