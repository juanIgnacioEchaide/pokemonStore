import React, {useState,useEffect} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

export default function HomeScreen(props) {

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WELCOME TO POKEMON STORE</Text>
            {data.map(i=> <View><TouchableOpacity style={{backgroundColor:'red'}} key={i.name}>        
                               <Text>{i.url}</Text> 
                            </TouchableOpacity></View>)}
      </View>
    )
}
