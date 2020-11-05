import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackNavigator, ContactStackNavigator } from "../stack_navigator/StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;