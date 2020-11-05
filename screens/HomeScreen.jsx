import React, {useState,useEffect} from 'react';
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
    const[data,setData]=useState([]);
    
    const fetchData=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => setData([allpokemon.results]))
    }

    useEffect(() => {
        fetchData();    
    }, [])
    
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default HomeScreen;