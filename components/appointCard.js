import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppointCard({
  appointments,
  handleDelete,
  refreshing,
  onRefresh,
}) {
  return (
    <View style={globalStyles.list}>
      {appointments.length === 0 ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text style={globalStyles.noData}>
            No Appointment Data Found. Press the '+' button to add a new
            appointment.
          </Text>
        </ScrollView>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={appointments}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
