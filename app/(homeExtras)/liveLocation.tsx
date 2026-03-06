import LiveLocationModal from "@/components/modals/liveLocationModal";
import ArrowBack from "@/components/arrowback";
import { liveLocationStyles as styles } from "@/styles/app/(homeExtras)/liveLocation";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/src/themes/colors";

export default function LiveLocation() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(true);
  }, []);
  return (
    <SafeAreaView style={styles.Container} edges={["top"]}>
       <LiveLocationModal visible= {modalVisible} onClose={() => setModalVisible(false)}/>     
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.iconContainer}>
          <Ionicons name="location" size={50} color={colors.primary} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.title}>What is your location</Text>
          <Text style={styles.subtitle}>
            We need to know your location in order
          </Text>
          <Text style={styles.subtitle}>To provide nearby services</Text>
        </View>

        <Link
          href={"/(homeExtras)/selectDestinationScreen"}
          style={styles.link}
        >
          Enter Location manually
        </Link>
      </View>
    </SafeAreaView>
  );
}
