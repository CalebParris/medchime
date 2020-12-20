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
import AppointCard from "../components/appointCard";
import AppointForm from "../components/appointForm";
import axios from "axios";

export default function Appointments() {
  const [appointments, setAppointments] = useState({
    date: "",
    time: "",
    doctor: "",
    location: "",
    id: "",
    deviceId: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const addAppointment = (appointment) => {
    appointment.id = Math.random().toString();
    axios
      .post(`https://medchime-server.herokuapp.com/api/appointments`, {
        date: appointment.date,
        time: appointment.time,
        doctor: appointment.doctor,
        location: appointment.location,
        deviceId: appointment.deviceId,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Appointments</Text>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={globalStyles.modalClose}
            />
            <AppointForm addAppointment={addAppointment} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <AppointCard appointments={appointments} />

      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        onPress={() => setModalOpen(true)}
        style={globalStyles.modalOpen}
      />
    </View>
  );
}
