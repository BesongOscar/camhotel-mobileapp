import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { KYCButtonStyles as styles } from "@/styles/components/(createAccount)_Components/kycVerification_Components/KYCButton";
import { colors } from "@/src/themes";

type KycbuttonProps = {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
  buttonColor?: string;
  textColor?: string;
};

export default function Kycbutton({
  label,
  isActive,
  onPress,
  buttonColor = colors.textSecondary,
  textColor = colors.textPrimary,
}: KycbuttonProps) {
  const isCompleted = buttonColor === colors.primary;

  return (
    <View style={styles.KYCbuttonContainer}>
      <Pressable
        style={[styles.KYCbutton, { borderColor: buttonColor }]}
        onPress={onPress}
      >
        <Ionicons
          name="newspaper"
          size={25}
          color={isCompleted ? colors.primary : colors.textSecondary}
        />
        <Text style={[styles.KYClabel, { color: textColor }]}>{label}</Text>
        <Ionicons
          name={isCompleted ? "checkmark-circle" : "checkmark-circle-outline"}
          size={25}
          color={isCompleted ? colors.primary : colors.textSecondary}
        />
      </Pressable>
    </View>
  );
}
