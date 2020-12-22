import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppointCard({ appointments, handleDelete }) {
  return (
    <View style={globalStyles.list}>
      {appointments.length === 0 ? (
        <Text style={globalStyles.noData}>
          No Appointment Data Found. Press the '+' button to add a new
          appointment.
        </Text>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={appointments}
          renderItem={({ item }) => (
            <View style={globalStyles.card}>
              <View style={globalStyles.cardHeader}>
                <Text style={globalStyles.emptyBox}></Text>
                <Text style={globalStyles.cardHeaderText}>{item.date}</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="close"
                    size={24}
                    onPress={() => handleDelete(item._id)}
                    style={globalStyles.modalClose}
                  />
                </TouchableOpacity>
              </View>
              <Text style={globalStyles.cardText}>Time: {item.time}</Text>
              <Text style={globalStyles.cardText}>Doctor: {item.doctor}</Text>
              <Text style={globalStyles.cardText}>
                Location: {item.location}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
