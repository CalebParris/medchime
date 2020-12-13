import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppointCard({ appointments }) {
  return (
    <View style={globalStyles.list}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={appointments}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <View style={globalStyles.cardHeader}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  size={24}
                  onPress={() => console.log("edited")}
                  style={globalStyles.editIcon}
                />
              </TouchableOpacity>
              <Text style={globalStyles.cardHeaderText}>{item.date}</Text>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  onPress={() => console.log("deleted")}
                  style={globalStyles.modalClose}
                />
              </TouchableOpacity>
            </View>
            <Text style={globalStyles.cardText}>Time: {item.time}</Text>
            <Text style={globalStyles.cardText}>Doctor: {item.doctor}</Text>
            <Text style={globalStyles.cardText}>Location: {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}
