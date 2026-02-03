import { Stack } from "expo-router";

export default function HomeExtrasLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="calendarScreen" />
      <Stack.Screen name="hotelDetailScreen"/>
      <Stack.Screen name="liveLocation"/>
      <Stack.Screen name="map"/>
      <Stack.Screen name="notificationScreen"/>
      <Stack.Screen name="selectDestinationScreen"/>
      <Stack.Screen name="selectGuestScreen"/>
    </Stack>
  );
}
