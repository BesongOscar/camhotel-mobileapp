import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { guestAndRoomsStyles as styles } from "@/styles/components/(Main)_Components/guestAndRoomsDetails";

type GuestandRoomDetailsProps = {
  title: string;
  subtitle: string;
  value?: number;
  onAdd?: () => void;
  onSubtract?: () => void;
  disableSubtract?: boolean;
  disableAdd?: boolean;
};

export default function GuestandRoomDetails({
  title,
  subtitle,
  value,
  onAdd,
  onSubtract,
  disableAdd,
  disableSubtract,
}: GuestandRoomDetailsProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.counterRow}>
        <Pressable
          style={[
            styles.iconContainer,
            disableSubtract && styles.disabledButton,
          ]}
          onPress={onSubtract}
          disabled={disableSubtract}
        >
          <Entypo
            name="minus"
            size={18}
            color={disableSubtract ? "grey" : "#00ee"}
          />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.numberText}>{value}</Text>
        </View>

        <Pressable
          style={[styles.iconContainer, disableAdd && styles.disabledButton]}
          onPress={onAdd}
          disabled={disableAdd}
        >
          <MaterialIcons
            name="add"
            size={18}
            color={disableAdd ? "grey" : "#00ee"}
          />
        </Pressable>
      </View>
    </View>
  );
}
