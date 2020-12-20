import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import Btn from "../components/btn";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Moment from "moment";
import Constants from "expo-constants";

const appointSchema = yup.object({
  doctor: yup.string().required(),
  location: yup.string().required(),
});

export default function AppointForm({ addAppointment }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          date: Moment().format("MM/DD/YYYY"),
          time: Moment().format("hh:mm A"),
          doctor: "",
          location: "",
          deviceId: Constants.deviceId,
        }}
        validationSchema={appointSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addAppointment(values);
        }}
      >
        {(props) => {
          const [isDateVisible, setDateVisibility] = useState(false);
          const [isTimeVisible, setTimeVisibility] = useState(false);

          const handleDate = (date) => {
            let newDate = Moment(date).format("MM/DD/YYYY");
            return (props.values.date = newDate);
          };

          const handleTime = (time) => {
            let newTime = Moment(time).format("hh:mm A");
            return (props.values.time = newTime);
          };

          const displayDate = () => {
            if (props.values.date === "") {
              return Moment().format("MM/DD/YYYY");
            } else {
              return props.values.date;
            }
          };

          const displayTime = () => {
            if (props.values.time === "") {
              return Moment().format("hh:mm A");
            } else {
              return props.values.time;
            }
          };

          return (
            <View>
              <Text style={globalStyles.formHeader}>
                Enter New Appointment Information Below:
              </Text>

              <TouchableOpacity
                style={globalStyles.dateTimeInput}
                onPress={() => setDateVisibility(true)}
              >
                <View style={globalStyles.dateTimeBlock}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={24}
                    style={globalStyles.dateTimeIcon}
                  />
                  <Text>{displayDate()}</Text>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={24}
                    style={globalStyles.editIcon}
                  />
                  <DateTimePickerModal
                    isVisible={isDateVisible}
                    mode="date"
                    onConfirm={handleDate}
                    onCancel={() => setDateVisibility(false)}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.dateTimeInput}
                onPress={() => setTimeVisibility(true)}
              >
                <View style={globalStyles.dateTimeBlock}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={24}
                    style={globalStyles.dateTimeIcon}
                  />
                  <Text>{displayTime()}</Text>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={24}
                    style={globalStyles.editIcon}
                  />
                  <DateTimePickerModal
                    isVisible={isTimeVisible}
                    mode="time"
                    onConfirm={handleTime}
                    onCancel={() => setTimeVisibility(false)}
                  />
                </View>
              </TouchableOpacity>

              <TextInput
                style={globalStyles.input}
                placeholder="Doctor's Name"
                onChangeText={props.handleChange("doctor")}
                value={props.values.doctor}
              />
              <Text style={globalStyles.errMessage}>
                {props.touched.doctor && props.errors.doctor}
              </Text>

              <TextInput
                style={globalStyles.input}
                placeholder="Location of Appointment"
                onChangeText={props.handleChange("location")}
                value={props.values.location}
              />
              <Text style={globalStyles.errMessage}>
                {props.touched.location && props.errors.location}
              </Text>

              <Btn text="Sumbit" onPress={props.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
