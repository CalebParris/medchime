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

export default function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      date: "01/01/2021",
      time: "3:00 PM",
      doctor: "Dr. King",
      location: "123 Address blvd Houston, TX",
      id: 1,
    },
    {
      date: "02/01/2021",
      time: "8:00 AM",
      doctor: "Dr. Who",
      location: "123 Address blvd Houston, TX",
      id: 2,
    },
    {
      date: "03/01/2021",
      time: "10:00 AM",
      doctor: "Dr. Zhivago",
      location: "123 Address blvd Houston, TX",
      id: 3,
    },
    {
      date: "04/01/2021",
      time: "1:00 PM",
      doctor: "Dr. Strangelove",
      location: "123 Address blvd Houston, TX",
      id: 4,
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const addAppointment = (appointment) => {
    appointment.id = Math.random().toString();
    setAppointments((currentAppiontments) => {
      return [appointment, ...currentAppiontments];
    });
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
