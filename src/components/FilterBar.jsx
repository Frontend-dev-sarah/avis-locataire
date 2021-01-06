import React from 'react';
import { TextInput,  View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FilterBar = ({searchCity, onChangeCountry, onSubmitEditing}) => {
   

    return <View style = {styles.container}>        
        <AntDesign name = 'search1' size = {25} color = 'black'/>
        <TextInput
          placeholder = 'Search Cities By Typing A Country Name'
          autoCapitalize = 'none'
          style = {styles.searchInput}
          value = {searchCity}
          onChangeText = {(search) => onChangeCountry(search)}
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
        borderRadius: 7     
    }
})

export default FilterBar;