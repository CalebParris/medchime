import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MedCard from "../components/medCard";
import MedForm from "../components/medForm";

export default function MedList() {
  const [meds, setMeds] = useState([
    { name: "med 1", instructions: "1 tablet twice a day", id: 1 },
    { name: "med 2", instructions: "4ml once every 6 hours", id: 2 },
    {
      name: "med 3",
      instructions: "2 capsules three times daily",
      id: 3,
    },
    {
      name: "med 4",
      instructions:
        "1 tablet disolved in 10 ml water, then take 5ml of solution",
      id: 4,
    },
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
