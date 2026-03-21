import { View,Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import SecuritySettingsTab from "@/components/(accountExtras)/securitySettingsTab"
import { SecuritySettingsScreenStyles as styles } from "@/styles/app/(accountExtras)/securitySettingsScreen"
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function SecuritySettings(){
    const { t } = useTranslation();
    return(
        <SafeAreaView edges={['top']} style={styles.container}>
             <View>
                <Text style={styles.Title}>{t("securitySettingsScreen.title")}</Text>
                <SecuritySettingsTab tabName={t("securitySettingsScreen.changeEmail")} onPress={()=>{}}/>
                <SecuritySettingsTab tabName={t("securitySettingsScreen.changePasswordAndPin")} onPress={()=>{}}/>
             </View>
        </SafeAreaView>
    )
}