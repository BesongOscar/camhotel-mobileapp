import { View, Text, ScrollView } from "react-native";
import { privacyData } from "@/constants/privacyData";
import { PrivacyPolicyStyles as styles } from "@/styles/app/(accountExtras)/privacyPolicyScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.headerTitle}>{t("privacyPolicyScreen.title")}</Text>
        {privacyData.map((item) => (
          <View key={item.id} style={{ marginTop: 10 }}>
            <Text style={styles.sectionTitle}>
              {item.id} {item.title}
            </Text>
            <Text style={styles.text}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
