import React, { useMemo, useRef, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
//import styles from "@/utility/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSlides } from "@/constants/slides";
import { useLanguage } from "@/src/context/languageContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/button";
import { useRouter } from "expo-router";
import { onBoardingStyles as styles } from "@/styles/app/(boardingFlow)/onBoarding";
import { useTranslation } from "@/src/hooks/Usetranslation";

const { width } = Dimensions.get("window");

export default function Index() {
  const { t } = useTranslation();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);

  //Re-compute slides whenever locale changes so translations update
  const { locale } = useLanguage();
  const slides = useMemo(() => getSlides(t), [locale]);

  // check if onboarding was already shown
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };

  const handleSkip = () => finishOnboarding();
  const finishOnboarding = async () => {
    await AsyncStorage.setItem("hasOnboarded", "true");
    router.push("/welcome");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={[styles.button, { marginTop: 45 }]}>
        {currentIndex < slides.length - 1 ? (
          <Button
            label={t("onBoardingButtonText.skip")}
            onPress={handleSkip}
            height={50}
            width={100}
            theme="primary"
          />
        ) : (
          <View />
        )}
      </View>

      <FlatList
        data={slides}
        ref={flatListRef}
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.imgContainer}>{item.image}</View>

            <View style={styles.dots}>
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    { opacity: currentIndex === index ? 1 : 0.3 },
                  ]}
                />
              ))}
            </View>

            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />

      <View style={[styles.button, { marginBottom: 45 }]}>
        <Button
          label={t("onBoardingButtonText.next")}
          onPress={handleNext}
          height={50}
          width={100}
          theme="secondary"
        />
      </View>
    </SafeAreaView>
  );
}
