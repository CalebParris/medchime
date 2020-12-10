import React, { useState } from "react";
import { Text, View, FlatList, Button, Modal } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MedList() {
  const [meds, setMeds] = useState([
    { text: "med 1", key: 1 },
    { text: "med 2", key: 2 },
    { text: "med 3", key: 3 },
    { text: "med 4", key: 4 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Medication List Screen</Text>
      <Modal visible={modalOpen} animationType="slide">
        <View style={globalStyles.modal}>
          <MaterialCommunityIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={globalStyles.modalClose}
          />
        </View>
      </Modal>
      <View style={globalStyles.list}>
        <FlatList
          data={meds}
          renderItem={({ item }) => (
            <Text style={globalStyles.med}>{item.text}</Text>
          )}
        />
      </View>
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        onPress={() => setModalOpen(true)}
        style={globalStyles.modalOpen}
      />
    </View>
  );
}
