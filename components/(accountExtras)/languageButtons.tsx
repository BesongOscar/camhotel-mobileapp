import { View,Text } from "react-native";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

type languageButtonTypes = {
    name: string;
}

export default function languageButton({name}: languageButtonTypes) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return(
    <Pressable>
        <Text>{name}</Text>
    </Pressable>
  )
}
