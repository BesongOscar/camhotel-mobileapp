import AppBar from "@/components/(homeExtras)/appBar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <AppBar
          paddingHorizontal={0}
          paddingVertical={0}
          name={"Notification"}
        />
      </View>
    </SafeAreaView>
  );
}
