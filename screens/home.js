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
      <Text style={globalStyles.titleText}>Welcome to the MedChime app!</Text>
      <Text style={globalStyles.bodyText}>
        You can go to the Medications tab and enter the name of a medicine as
        well as any instructions that you may need, like dosage and frequency.
      </Text>
      <Text style={globalStyles.bodyText}>
        You can also go to the Appointments tab and enter the date/time of the
        appointment as well as include the doctor’s name and location.
      </Text>
      <Text style={globalStyles.bodyText}>
        Features like having a push notification sent to you for the medicines
        and appointments, as well as other features are currently in
        development. So, stay tuned for more exciting additions to this app.
      </Text>
    </View>
  );
}
