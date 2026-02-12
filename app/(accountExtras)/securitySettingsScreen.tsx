import { View,Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import SecuritySettingsTab from "@/components/(accountExtras)/securitySettingsTab"
import { SecuritySettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/securitySettingsScreen"

export default function SecuritySettings(){
    return(
        <SafeAreaView edges={['top']} style={styles.container}>
             <View>
                <Text style={styles.Title}>Security Settings</Text>
                <SecuritySettingsTab tabName="Change Email" onPress={()=>{}}/>
                <SecuritySettingsTab tabName="Change Password and Pin" onPress={()=>{}}/>
             </View>
        </SafeAreaView>
    )
}