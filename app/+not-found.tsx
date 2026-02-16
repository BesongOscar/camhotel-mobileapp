import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { colors } from "@/src/themes";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Stack.Screen options={{ headerTitle: "Oops! Not Found" }} />
        <Link href="/" style={styles.link}>
          Go to Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  link: {
    fontSize: 20,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
