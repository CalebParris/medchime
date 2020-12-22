import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MedCard({ meds, handleDelete }) {
  return (
    <View style={globalStyles.list}>
      {meds.length === 0 ? (
        <Text style={globalStyles.noData}>
          No Medication Data Found. Press the '+' button to add a new
          medication.
        </Text>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={meds}
          renderItem={({ item }) => (
            <View style={globalStyles.card}>
              <View style={globalStyles.cardHeader}>
                <Text style={globalStyles.emptyBox}></Text>
                <Text style={globalStyles.cardHeaderText}>{item.name}</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="close"
                    size={24}
                    onPress={() => handleDelete(item._id)}
                    style={globalStyles.modalClose}
                  />
                </TouchableOpacity>
              </View>
              <Text style={globalStyles.cardText}>
                Instructions: {item.instructions}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
