import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';



const Cities  = ({ data }) => {
    const renderItem = (item) => {
        return (
            <View key = {item.id} style ={styles.container}>
                <TouchableOpacity onPress = {() => console.warn(`The city you clicked is ${item.name}`)}>
                <Text>City: {item.name}</Text>
                </TouchableOpacity>
                <Text>Country: {item.country}</Text>
            </View>
        )
    }

    return <>
    
        <FlatList
        style = {styles.container}
        data = {data}   
        keyExtractor = {(item, index) => `${item.id}-list-${Math.random().toString()}`}
        renderItem = {({item}) => renderItem(item)}/>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        flex: 0.3
    }
})
export default Cities;