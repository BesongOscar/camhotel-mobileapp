import { Stack } from "expo-router";

export default function HomeExtrasLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="calendarScreen"
        options={{
          title: "Choose date",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="hotelDetailScreen" />
      <Stack.Screen
        name="liveLocation"
        options={{
          title: "liveLocation",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="map"
        options={{
          title: "map",
          headerShown: false,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="notificationScreen"
        options={{
          title: "Notifications",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="selectDestinationScreen"
        options={{
          title: "Select DestinationScreen",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="selectGuestScreen"
        options={{
          title: "selectGuestScreen",
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
