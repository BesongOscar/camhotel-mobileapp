import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { HelpenterScreenStyles as styles } from "@/styles/app/(accountExtras)/helpCenterScreen";
import { FAQItem } from "@/components/(accountExtras)/faqItem";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function HelpCenter() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { t } = useTranslation();
  const toggleItem = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* Page Title */}
      <Text style={styles.Title}>{t("helpCenterScreen.title")}</Text>

      {/* Help Type Dropdown */}
      <FAQItem
        title={t("helpCenterScreen.helpType")}
        expanded={expanded === "helpType"}
        onPress={() => toggleItem("helpType")}
        content="Select the type of help you need: Account Management, Payment Issues, Technical Support, or General Inquiries."
      />

      {/* Section Title */}
      <Text style={styles.sectionTitle}>{t("helpCenterScreen.accountManagement")}</Text>

      {/* FAQ Items */}
      <FAQItem
        title={t("helpCenterScreen.howToCreateAccount")}
        expanded={expanded === "create"}
        onPress={() => toggleItem("create")}
        content="To create an account, tap on Sign Up, enter your details and verify your email."
      />

      <FAQItem
        title={t("helpCenterScreen.howToDeleteAccount")}
        expanded={expanded === "delete"}
        onPress={() => toggleItem("delete")}
        content="Go to Settings > Account > Delete Account and confirm your action."
      />
    </SafeAreaView>
  );
}
