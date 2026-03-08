import { View, Text, Modal, StyleSheet } from "react-native";
import Button from "../../../components/button";
import { useState, } from "react";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { KYCVerificationModalStyles as styles } from "@/styles/app/(auth)/(createAccount)/KYCverificationModal";
import { useTranslation } from "@/src/hooks/Usetranslation";

export default function KYCVerificationModal({}) {
  const [modalVisible, setModalVisible] = useState(true);
  const router = useRouter();
  const { t } = useTranslation();
  const handlePush = () => {
    router.push("/(main)/Home");
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.ModalOverlay}>
        <View style={styles.modalBoxContent}>
          <Image style={styles.imageContainer} />
          <Text style={styles.modalText}>
            Your account will be verified once your documents are validated
          </Text>
          <Button
            label="Continue"
            onPress={handlePush}
            theme="secondary"
            height={50}
            width={"70%"}
          />
        </View>
      </View>
    </Modal>
  );
}
