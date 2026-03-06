import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import * as Localization from "expo-localization";
import { languageScreenStyles as styles } from "@/styles/app/(accountExtras)/languageScren";
import i18n from "@/locales/i18n";
import { useLanguage } from "@/src/context/languageContext";

export default function LanguageScreen() {
  const { language, changeLanguage, locale } = useLanguage();

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* Title */}
      <Text style={styles.Title}>{i18n.t("languageScreen.title")}</Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {/* System language */}
        <TouchableOpacity
          style={[
            styles.optionRow,
            language === "system" && styles.selectedRow,
          ]}
          onPress={() => changeLanguage("system")}
        >
          <Text style={styles.icon}>🌐</Text>
          <Text style={styles.optionText}>
            {i18n.t("languageScreen.system")}
          </Text>
          <Text style={styles.radio}>{language === "system" ? "✓" : "○"}</Text>
        </TouchableOpacity>

        {/* English */}
        <TouchableOpacity
          style={[styles.optionRow, language === "en" && styles.selectedRow]}
          onPress={() => changeLanguage("en")}
        >
          <Text style={styles.icon}>🇬🇧</Text>
          <Text style={styles.optionText}>English</Text>
          <Text style={styles.radio}>{language === "en" ? "✓" : "○"}</Text>
        </TouchableOpacity>

        {/* French */}
        <TouchableOpacity
          style={[styles.optionRow, language === "fr" && styles.selectedRow]}
          onPress={() => changeLanguage("fr")}
        >
          <Text style={styles.icon}>🇫🇷</Text>
          <Text style={styles.optionText}>Français</Text>
          <Text style={styles.radio}>{language === "fr" ? "✓" : "○"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
