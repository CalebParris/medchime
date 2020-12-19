import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import Constants from "expo-constants";

export default function Home() {
  const [device, setDevice] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://medchime-server.herokuapp.com/api/users/${Constants.deviceId}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response === null) {
          fetch(
            `https://medchime-server.herokuapp.com/api/users/${Constants.deviceId}`,
            {
              method: "POST",
            }
          )
            .then((response) => response.json())
            .then((response) => {
              setDevice(response.deviceId);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}
