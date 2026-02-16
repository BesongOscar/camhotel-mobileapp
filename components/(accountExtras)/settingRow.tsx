import { View,Switch,Text } from "react-native";
import { SettingsRowStyles as styles } from "@/styles/components/(accountExtras)/settingsRow";
import { colors } from "@/src/themes";

const PRIMARY = colors.primary;
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
        trackColor={{ false: colors.secondary, true: colors.switchtracktrue }}
        thumbColor={value ? PRIMARY : colors.switchthumbtrue}
      />
    </View>
  );
};
