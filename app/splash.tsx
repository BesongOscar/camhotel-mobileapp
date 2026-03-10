import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashStyles as styles } from "@/styles/app/splash";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(boardingFlow)/onBoarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Center content */}
      <View style={styles.centerContent}>
        <View style={styles.iconBox} />
        <Text style={styles.brandName}>camhotel</Text>
      </View>

      {/* Bottom tagline */}
      <Text style={styles.tagline}>
        Camhotel helps you find the hotels just for you {"\n"}at the best price
      </Text>
    </SafeAreaView>
  );
}
