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
import AppointCard from "../components/appointCard";
import AppointForm from "../components/appointForm";
import axios from "axios";
import Constants from "expo-constants";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const addAppointment = (appointment) => {
    axios
      .post(`https://medchime-server.herokuapp.com/api/appointments`, {
        date: appointment.date,
        time: appointment.time,
        doctor: appointment.doctor,
        location: appointment.location,
        deviceId: appointment.deviceId,
      })
      .then((response) => console.log("Successfully Created Appointment"))
      .catch((err) => console.log(err));
    setModalOpen(false);
    setIsUpdated(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://medchime-server.herokuapp.com/api/appointments/${id}`)
      .then((response) => console.log("Successfully Deleted Medication"))
      .catch((err) => console.log(err));
    setIsUpdated(true);
  };

  useEffect(() => {
    axios
      .get("https://medchime-server.herokuapp.com/api/appointments")
      .then((response) => {
        if (response.data.length === 0) {
          console.log("No Data found");
          setAppointments([]);
        } else {
          console.log("Data Found");
          setAppointments(
            response.data
              .filter((item) => item.deviceId === Constants.deviceId)
              .sort((a, b) => a.time.localeCompare(b.time))
              .sort((a, b) => new Date(a.date) - new Date(b.date))
          );
        }
      })
      .then(() => console.log(appointments.length))
      .catch((err) => console.log(err));
    setIsUpdated(false);
  }, [isUpdated]);

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

      <AppointCard appointments={appointments} handleDelete={handleDelete} />

      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        onPress={() => setModalOpen(true)}
        style={globalStyles.modalOpen}
      />
    </View>
  );
}
