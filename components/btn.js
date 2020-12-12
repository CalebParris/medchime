import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Btn({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
