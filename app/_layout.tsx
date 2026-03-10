import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FavoritesProvider } from "@/src/context/FavoritesContext";
import { LanguageProvider } from "@/src/context/languageContext";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <LanguageProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" />
          <Stack.Screen name="(boardingFlow)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(main)" />
          <Stack.Screen name="(homeExtras)" />
          <Stack.Screen name="(bookingsExtras)" />
          <Stack.Screen name="(accountExtras)" />
          <Stack.Screen
            name="selectRoomScreen"
            options={{
              title: "Select Room",
              headerShown: true,
              headerShadowVisible: false,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="exploreScreen" />
        </Stack>
      </LanguageProvider>
    </FavoritesProvider>
  );
}
