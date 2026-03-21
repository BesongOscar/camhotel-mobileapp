import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="(createAccount)" />
      <Stack.Screen name="(login)" />
    </Stack>
  );
}
