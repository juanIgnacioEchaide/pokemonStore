
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ContactScreen from "../screens/ContactScreen";

const Stack = createStackNavigator();
const defaultNavigationOptions=({props})=>({
    headerLeft: <Text>caca</Text>
})
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const StackNavigator = () => {
  return (
    <Stack.Navigator defaultNavigationOptions={defaultNavigationOptions} screenOptions={screenOptionStyle}>
       <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export { StackNavigator, ContactStackNavigator };