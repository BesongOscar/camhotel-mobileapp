import { View,TouchableOpacity,Text } from "react-native";
import { FAQItemStyles as styles } from "@/styles/components/(accountExtras)/faqItem";
import { Ionicons } from "@expo/vector-icons";

export const FAQItem = ({
  title,
  content,
  expanded,
  onPress,
}: {
  title: string;
  content: string;
  expanded: boolean;
  onPress: () => void;
}) => {
  return (
    <View style={styles.faqContainer}>
      <TouchableOpacity style={styles.faqHeader} onPress={onPress}>
        <Text style={styles.faqTitle}>{title}</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
        />
      </TouchableOpacity>

      {expanded && <Text style={styles.faqContent}>{content}</Text>}
    </View>
  );
};
