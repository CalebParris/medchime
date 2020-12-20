import React, { useState, useEffect } from "react";
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
import axios from "axios";

export default function MedList() {
  const [meds, setMeds] = useState({
    name: "",
    instructions: "",
    id: "",
    deviceId: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const addMed = (med) => {
    med.id = Math.random().toString();
    axios
      .post(`https://medchime-server.herokuapp.com/api/medications`, {
        name: med.name,
        instructions: med.instructions,
        deviceId: med.deviceId,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
