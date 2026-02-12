import AccountButton from "@/components/(Main)_Components/AccountTabButton";
import { accountStyles as styles } from "@/styles/app/(main)/Account";
import AccountProfileTab from "@/components/(Main)_Components/accountProfileTab";
import React from "react";
import { useRouter } from "expo-router";
import { Text, View, ScrollView } from "react-native";

const Account = () => {
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { gap: 10 }]}>
        <AccountProfileTab />
        <View style={styles.settingContainers}>
          <Text style={{ paddingBottom: 10, fontWeight: "700" }}>
            Preferences
          </Text>
          <AccountButton
            onPress={() => {
               router.push("/(accountExtras)/favoriteScreen");
            }}
            title="Favorite"
            leadingiconName="heart-outline"
          />
          <AccountButton
            onPress={() => {
              router.push("/(accountExtras)/languageScreen")
            }}
            title="Language"
            leadingiconName="language-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/paymentMethod')
            }}
            title="Saved payment method"
            leadingiconName="wallet-outline"
          />
        </View>

        <View style={styles.settingContainers}>
          <Text style={{ paddingBottom: 10, fontWeight: "700" }}>Settings</Text>
          <AccountButton
            onPress={() => {}}
            title="KYC Verification"
            leadingiconName="id-card-outline"
          />
          <AccountButton
            onPress={() => {
              router.push("/(accountExtras)/notificationSettingsScreen")
            }}
            title="Notification Settings"
            leadingiconName="notifications-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/securitySettingsScreen')
            }}
            title="Security Settings"
            leadingiconName="shield-outline"
          />
          <AccountButton
            onPress={() => {
              router.push('/(accountExtras)/accountSettingsScreen')
            }}
            title="Account Settings"
            leadingiconName="settings-outline"
          />
        </View>

        <View style={styles.settingContainers}>
          <Text style={{ paddingBottom: 10, fontWeight: "700" }}>
            Information
          </Text>
          <AccountButton
            onPress={() => {}}
            title="Customer Support"
            leadingiconName="headset-outline"
          />
          <AccountButton
            onPress={() => {}}
            title="Help Center"
            leadingiconName="help-circle-outline"
          />
          <AccountButton
            onPress={() => {}}
            title="Privay Policy"
            leadingiconName="lock-closed-outline"
          />
          <AccountButton
            onPress={() => {}}
            title="Rate Our App"
            leadingiconName="star-outline"
          />
        </View>

        <View style={styles.settingContainers}>
          <AccountButton
            onPress={() => {}}
            title="Logout"
            leadingiconName="exit-outline"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
