import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Home from "./screens/home";
import MedList from "./screens/medList";
import Appointments from "./screens/appointments";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./components/header";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "MedList") {
              iconName = "pill";
            } else if (route.name === "Appointments") {
              iconName = "doctor";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "blue",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MedList" component={MedList} />
        <Tab.Screen name="Appointments" component={Appointments} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
