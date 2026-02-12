import { View,Switch,Text } from "react-native";
import { SettingsRowStyles as styles } from "@/styles/components/(accountExtras)/settingsRow";

const PRIMARY = "#00ee";
export const SettingRow = ({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#C7C7CC", true: "#B8C1FF" }}
        thumbColor={value ? PRIMARY : "#f4f3f4"}
      />
    </View>
  );
};
