import { View, Text, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AccountSettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/accountSettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "@/src/themes";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function AccountSettings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.Title}>{t("accountSettingsScreen.title")}</Text>
        <View style={styles.switchtab}>
          <Text style={styles.switchtabText}>{t("accountSettingsScreen.darkMode")}</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: colors.secondary, true: colors.switchtracktrue }}
            thumbColor={isDarkMode ? colors.primary : colors.switchthumbtrue}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "space-between" }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 16, letterSpacing: 0.2,color:colors.error }}>
              {t("accountSettingsScreen.deleteAccount")}
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={17}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
