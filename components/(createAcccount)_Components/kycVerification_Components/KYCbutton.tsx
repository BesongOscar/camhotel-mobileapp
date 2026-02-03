import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { KYCButtonStyles as styles } from "@/styles/components/(createAccount)_Components/kycVerification_Components/KYCButton";

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
  buttonColor = "grey",
  textColor = "#000000",
}: KycbuttonProps) {
  const isCompleted = buttonColor === "#00ee";

  return (
    <View style={styles.KYCbuttonContainer}>
      <Pressable 
        style={[
          styles.KYCbutton,
          { borderColor: buttonColor }
        ]} 
        onPress={onPress}
      >
        <Ionicons
          name="newspaper"
          size={25}
          color={isCompleted ? "#00ee" : "grey"}
        />
        <Text style={[styles.KYClabel, { color: textColor }]}>
          {label}
        </Text>
        <Ionicons
          name={isCompleted ? "checkmark-circle" : "checkmark-circle-outline"}
          size={25}
          color={isCompleted ? "#00ee" : "grey"}
        />
      </Pressable>
    </View>
  );
}