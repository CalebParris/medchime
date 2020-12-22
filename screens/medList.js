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
import Constants from "expo-constants";

export default function MedList() {
  const [meds, setMeds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const addMed = (med) => {
    axios
      .post("https://medchime-server.herokuapp.com/api/medications", {
        name: med.name,
        instructions: med.instructions,
        deviceId: med.deviceId,
      })
      .then((response) => console.log("Successfully Created Medication"))
      .catch((err) => console.log(err));
    setModalOpen(false);
    setIsUpdated(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://medchime-server.herokuapp.com/api/medications/${id}`)
      .then((response) => console.log("Successfully Deleted Medication"))
      .catch((err) => console.log(err));
    setIsUpdated(true);
  };

  useEffect(() => {
    axios
      .get("https://medchime-server.herokuapp.com/api/medications")
      .then((response) => {
        if (response.data.length === 0) {
          console.log("No Data found");
          setMeds([]);
        } else {
          console.log("Data Found");
          setMeds(
            response.data
              .filter((item) => item.deviceId === Constants.deviceId)
              .sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
              )
          );
        }
      })
      .then(() => console.log(meds.length))
      .catch((err) => console.log(err));
    setIsUpdated(false);
  }, [isUpdated]);

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

      <MedCard meds={meds} handleDelete={handleDelete} />

      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        onPress={() => setModalOpen(true)}
        style={globalStyles.modalOpen}
      />
    </View>
  );
}
