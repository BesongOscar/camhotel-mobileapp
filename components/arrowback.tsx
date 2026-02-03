import { Ionicons } from "@expo/vector-icons";
import { View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

const ArrowBack = () => {
  const router = useRouter();
  const handleBack =()=> {
    router.back();
  }
  return (
    <View>
      <Pressable onPress={handleBack}>
        <Ionicons name="arrow-back" color={"black"} size={22} />
      </Pressable>
    </View>
  );
};

export default ArrowBack;
