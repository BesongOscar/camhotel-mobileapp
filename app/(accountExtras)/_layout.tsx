import { Stack } from "expo-router";

export default function AccountExtrasLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="accountProfileScreen"
        options={{
          title: "Profile",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="favoriteScreen"
        options={{
          title: "Favorites",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="languageScreen"
        options={{
          title: "Language",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="paymentMethod"
        options={{
          title: "Saved Payment Method",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="addPaymentMethod"
        options={{
          title: "Add Payment Method",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="notificationSettingsScreen"
        options={{
          title: "Notification Settings",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="securitySettingsScreen"
        options={{
          title: "Security Settings",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="accountSettingsScreen"
        options={{
          title: "Account Settings",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
