import AccountButton from "@/components/(Main)_Components/AccountTabButton";
import { accountStyles as styles } from "@/styles/app/(main)/Account";
import AccountProfileTab from "@/components/(Main)_Components/accountProfileTab";
import React from "react";
import { useRouter } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { useTranslation } from "@/src/hooks/Usetranslation";

const Account = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { gap: 10 }]}>
        <AccountProfileTab />
        <View style={styles.settingContainers}>
          <Text style={{ paddingBottom: 10, fontWeight: "700" }}>
            {t("accountScreen.preferences")}
          </Text>
          <AccountButton
            onPress={() => {
               router.push("/(accountExtras)/favoriteScreen");
            }}
            title={t("accountScreen.favorite")}
            leadingiconName="heart-outline"
          />
          <AccountButton
            onPress={() => {
              router.push("/(accountExtras)/languageScreen")
            }}
            title={t("accountScreen.language")}
            leadingiconName="language-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/paymentMethod')
            }}
            title={t("accountScreen.savedPaymentMethod")}
            leadingiconName="wallet-outline"
          />
        </View>

        <View style={styles.settingContainers}>
          <Text style={{ paddingBottom: 10, fontWeight: "700" }}>{t("accountScreen.settings")}</Text>
          <AccountButton
            onPress={() => {}}
            title={t("accountScreen.kycVerification")}
            leadingiconName="id-card-outline"
          />
          <AccountButton
            onPress={() => {
              router.push("/(accountExtras)/notificationSettingsScreen")
            }}
            title={t("accountScreen.notificationSettings")}
            leadingiconName="notifications-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/securitySettingsScreen')
            }}
            title={t("accountScreen.securitySettings")}
            leadingiconName="shield-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/accountSettingsScreen')
            }}
            title={t("accountScreen.accountSettings")}
            leadingiconName="settings-outline"
          />
        </View>

        <View style={styles.settingContainers}>
          <Text style={{ paddingBottom: 10, fontWeight: "700" }}>
            {t("accountScreen.information")}
          </Text>
          <AccountButton
            onPress={() => {}}
            title={t("accountScreen.customerSupport")}
            leadingiconName="headset-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/helpCenterScreen')
            }}
            title={t("accountScreen.helpCenter")}
            leadingiconName="help-circle-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/privacyPolicyScreen')
            }}
            title={t("accountScreen.privacyPolicy")}
            leadingiconName="lock-closed-outline"
          />
          <AccountButton
            onPress={() => {}}
            title={t("accountScreen.rateOurApp")}
            leadingiconName="star-outline"
          />
        </View>

        <View style={styles.settingContainers}>
          <AccountButton
            onPress={() => {}}
            title={t("accountScreen.logout")}
            leadingiconName="exit-outline"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
