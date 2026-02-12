import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AccountSettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/accountSettingsScreen";

export default function AccountSettings(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.Title}>Account Settings</Text>
            </View>
        </SafeAreaView>
    )
}