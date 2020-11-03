import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Search')}>
            <Text>Search</Text>
           
        </TouchableOpacity>
      </View>
    );
    
}

function SearchScreen(props) {

    const pokemones= ['este', 'el otro', 'garlompita'];
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {pokemones.map(pk=> <TouchableOpacity>
                                <View style={{width:100, height:100, backgroundColor:'red', padding:4, justifyContent:'space-around', margin:2}}>
                                    <Text>{pk}</Text>
                                </View>     
                                </TouchableOpacity>)}
      </View>
    );
    
}

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
function DrawerNavigator() {
  return (
    <NavigationContainer>  
    <TouchableOpacity>
      <View style={{height:70, backgroundColor:'or'}}>
        <Image style={{marginTop:15, marginLeft:20,width:50, height:50}} source={require('../assets/images/logo.jpg')}/> 
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