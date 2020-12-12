import React from "react";
import { Text, View, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MedCard({ meds }) {
  return (
    <View style={globalStyles.list}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={meds}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <View style={globalStyles.cardHeader}>
              <Text style={globalStyles.cardHeaderText}>{item.name}</Text>
            </View>
            <Text style={globalStyles.cardText}>Dosage: {item.dosage}</Text>
            <Text style={globalStyles.cardText}>Notes: {item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}
