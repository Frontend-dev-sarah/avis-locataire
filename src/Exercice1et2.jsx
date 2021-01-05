import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';



const Cities  = ({ data }) => {
    const renderItem = (item) => {
        return (
            <View style ={styles.container}>
                <TouchableOpacity onPress = {() => console.warn(`The city you clicked is ${item.name}`)}>
                <Text>City: {item.name}</Text>
                </TouchableOpacity>
                <Text>Country: {item.country}</Text>
            </View>
        )
    }

    return <>
    
        <FlatList
        data = {data}   
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => renderItem(item)}/>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    }
})
export default Cities;