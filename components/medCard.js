import React from "react";
import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MedCard({ meds, handleDelete }) {
  const workInProgress = () => {
    Alert.alert(
      "This feature is a work in progress",
      "Please hit 'OK' to be returned to the previous screen",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  return (
    <View style={globalStyles.list}>
      {meds.length === 0 ? (
        <Text>No Medication Data Found</Text>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={meds}
          renderItem={({ item }) => (
            <View style={globalStyles.card}>
              <View style={globalStyles.cardHeader}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={24}
                    onPress={() => workInProgress()}
                    style={globalStyles.editIcon}
                  />
                </TouchableOpacity>
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
