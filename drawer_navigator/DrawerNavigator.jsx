import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "../stack_navigator/StackNavigator";
import TabNavigator from "../tab_navigator/TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;