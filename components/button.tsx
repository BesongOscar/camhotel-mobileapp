import { Alert, Pressable, Text, View } from "react-native";
import { buttonStyles as styles } from "@/styles/components/button";

type Props = {
  label: string;
  theme?: "primary" | "secondary" | "tertiary";
  onPress?: () => void;
  height?: number | string;
  width?: number | string;
};

export default function Button({
  label,
  theme,
  onPress,
  height, 
  width,
}: Props) {
  // Only allow number or percentage string for height/width
  const customSize: { [key: string]: number | undefined | `${number}%` } = {};
  if (
    typeof height === "number" ||
    (typeof height === "string" && height.endsWith("%"))
  )
    customSize.height = height as any;
  if (
    typeof width === "number" ||
    (typeof width === "string" && width.endsWith("%"))
  )
    customSize.width = width as any;

  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, customSize]}>
        <Pressable
          style={[styles.button, { backgroundColor: "lightgrey" }]}
          onPress={
            onPress ? onPress : () => Alert.alert("Button", "Button Pressed!")
          }
        >
          <Text style={[styles.buttonLabel, { color: "white" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  } else if (theme === "secondary") {
    return (
      <View style={[styles.buttonContainer, customSize]}>
        <Pressable
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={
            onPress ? onPress : () => Alert.alert("Button", "Button Pressed!")
          }
        >
          <Text style={[styles.buttonLabel, { color: "white" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  } else if (theme === "tertiary") {
    return (
      <View style={[styles.buttonContainer, customSize]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#f2f2ff" }]}
          onPress={
            onPress ? onPress : () => Alert.alert("Button", "Button Pressed!")
          }
        >
          <Text style={[styles.buttonLabel, { color: "#00ee" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={[styles.buttonContainer, customSize]}>
      <Pressable
        style={styles.button}
        onPress={
          onPress ? onPress : () => Alert.alert("Button", "Button Pressed!")
        }
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
