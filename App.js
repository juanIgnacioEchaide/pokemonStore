
import React from "react";
import  {NavigationContainer}  from "@react-navigation/native";
import DrawerNavigator from "./drawer_navigator/DrawerNavigator";

 const App = () => {

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App