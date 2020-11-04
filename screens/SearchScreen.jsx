import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

function SearchScreen(props) {
    const pokemones= ['este', 'el otro', 'garlompita'];
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {pokemones.map(pk=> 
        <TouchableOpacity>
            <View style={{width:100, 
                        height:100, 
                        backgroundColor:'red', 
                        padding:4, 
                        justifyContent:'space-around', 
                        margin:2}}>
                <Text>{pk}</Text>
            </View>     
        </TouchableOpacity>)}
    </View>
    )
}

SearchScreen.propTypes = {

}

export default SearchScreen

