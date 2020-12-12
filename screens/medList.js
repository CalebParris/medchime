import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MedCard from "../components/medCard";
import MedForm from "../components/medForm.js";

export default function MedList() {
  const [meds, setMeds] = useState([
    { name: "med 1", dosage: "2 Tablets", note: "Take with water", id: 1 },
    { name: "med 2", dosage: "4 ml", note: "Take with food", id: 2 },
    {
      name: "med 3",
      dosage: "1 capsule",
      note: "Do not mix with alcohol",
      id: 3,
    },
    { name: "med 4", dosage: "1 ml", note: "Keep refridgerated", id: 4 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const addMed = (med) => {
    med.id = Math.random().toString();
    setMeds((currentMeds) => {
      return [med, ...currentMeds];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Medication List</Text>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={globalStyles.modalClose}
            />
            <MedForm addMed={addMed} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MedCard meds={meds} />

      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        onPress={() => setModalOpen(true)}
        style={globalStyles.modalOpen}
      />
    </View>
  );
}
