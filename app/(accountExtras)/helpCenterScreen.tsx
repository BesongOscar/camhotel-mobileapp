import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { HelpenterScreenStyles as styles } from "@/styles/app/(accountExtras)/helpCenterScreen";
import { FAQItem } from "@/components/(accountExtras)/faqItem";

export default function HelpCenter() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggleItem = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* Page Title */}
      <Text style={styles.Title}>Help Center</Text>

      {/* Help Type Dropdown */}
      <FAQItem
        title=" What kind of help do you need"
        expanded={expanded === "helpType"}
        onPress={() => toggleItem("helpType")}
        content="Select the type of help you need: Account Management, Payment Issues, Technical Support, or General Inquiries."
      />

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Account Management</Text>

      {/* FAQ Items */}
      <FAQItem
        title="How do I create an account"
        expanded={expanded === "create"}
        onPress={() => toggleItem("create")}
        content="To create an account, tap on Sign Up, enter your details and verify your email."
      />

      <FAQItem
        title="How do I delete an account"
        expanded={expanded === "delete"}
        onPress={() => toggleItem("delete")}
        content="Go to Settings > Account > Delete Account and confirm your action."
      />
    </SafeAreaView>
  );
}
