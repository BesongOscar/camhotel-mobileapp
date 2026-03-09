import { Ionicons } from "@expo/vector-icons";
import React, { useState, useMemo } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Countries, Country } from "@/constants/countries";
import { pickerStyles } from "@/styles/app/(auth)/(createAccount)/countryCodePicker";


// Default country: Cameroon
export const DEFAULT_COUNTRY: Country = Countries.find((c) => c.code === "CM")!;

type Props = {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
};

export default function CountryCodePicker({
  selectedCountry,
  onSelect,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      Countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dialCode.includes(search),
      ),
    [search],
  );

  return (
    <>
      {/* Trigger Button */}
      <TouchableOpacity
        style={pickerStyles.trigger}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={pickerStyles.flag}>{selectedCountry.flag}</Text>
        <Text style={pickerStyles.dialCode}>{selectedCountry.dialCode}</Text>
        <Ionicons name="chevron-down" size={13} color="#666" />
      </TouchableOpacity>

      {/* Vertical divider */}
      <View style={pickerStyles.divider} />

      {/* Country List Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={pickerStyles.modal} edges={["top", "bottom"]}>
          {/* Header */}
          <View style={pickerStyles.modalHeader}>
            <Text style={pickerStyles.modalTitle}>Select Country</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setSearch("");
              }}
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Search bar */}
          <View style={pickerStyles.searchContainer}>
            <Ionicons
              name="search"
              size={18}
              color="#888"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={pickerStyles.searchInput}
              placeholder="Search country or code..."
              value={search}
              onChangeText={setSearch}
              autoFocus
              returnKeyType="search"
              placeholderTextColor="#aaa"
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch("")}>
                <Ionicons name="close-circle" size={18} color="#aaa" />
              </TouchableOpacity>
            )}
          </View>

          {/* Country list */}
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.code}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  pickerStyles.item,
                  item.code === selectedCountry.code &&
                    pickerStyles.itemSelected,
                ]}
                onPress={() => {
                  onSelect(item);
                  setModalVisible(false);
                  setSearch("");
                }}
              >
                <Text style={pickerStyles.itemFlag}>{item.flag}</Text>
                <Text style={pickerStyles.itemName}>{item.name}</Text>
                <Text style={pickerStyles.itemDial}>{item.dialCode}</Text>
                {item.code === selectedCountry.code && (
                  <Ionicons name="checkmark" size={18} color="#4A90E2" />
                )}
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => (
              <View style={pickerStyles.separator} />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

