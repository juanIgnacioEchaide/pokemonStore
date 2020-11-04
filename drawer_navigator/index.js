import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Screens =[
    {name:'Home',component:HomeScreen},
    {name:'Search',component:SearchScreen}
]
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function Menu(props){
  return(
    <View> 
      
    </View>
  )
}

const openDrawer = () => {
  _drawer.navigation.toggleDrawer()
}

function DrawerNavigator() {
  return (
    <NavigationContainer>  
      <TouchableOpacity onPress={(props)=>props.navigation.toggleDrawer()()}>
        <View style={{height:70}}>
          <Image style={{marginTop:20, marginLeft:20,width:40, height:40}} 
          source={require('../assets/images/white-menu-icon-0.jpg')}
          /> 
        </View>
      </TouchableOpacity>
     
      <Drawer.Navigator  /* drawerContent={(props)=> <Menu {...props}/>} */

      initialRouteName="Home">
          {Screens.map( sc=>
                        <Drawer.Screen 
                        name={sc.name} 
                        component={sc.component}/>
            )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;