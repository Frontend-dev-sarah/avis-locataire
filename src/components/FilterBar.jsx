import React from 'react';
import { TextInput,  View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FilterBar = ({searchCity, onChangeCity, onSubmitEditing}) => {
   

    return <View style = {styles.container}>        
        <AntDesign name = 'search1' size = {25} color = 'black'/>
        <TextInput
          placeholder = 'Search Cities'
          autoCapitalize = 'none'
          autoCorrect = {false}
          style = {styles.searchInput}
          value = {searchCity}
          onChangeText = {(search) => onChangeCity(search)}
          onEndEditing = {() => onSubmitEditing()}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1, 
        borderColor: 'grey',
        margin: 10,
        borderRadius: 10
    },
    searchInput: {
        padding: 15,
        borderRadius: 7,
        flex: 1
    }
})

export default FilterBar;