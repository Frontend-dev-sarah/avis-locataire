import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cities from './src/Exercice1et2';
import ResultCities from './src/Exercice3';
import CitiesList from './src/Exercice4';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer'


const cities = [
  { id: 1, name: 'New York', country: 'United States' },
  { id: 2, name: 'London', country: 'England' },
  { id: 3, name: 'Berlin', country: 'Germany' },
  { id: 4, name: 'Paris', country: 'France' },
  { id: 5, name: 'Madrid', country: 'Spain' },
  { id: 6, name: 'Rome', country: 'Italy' },
  { id: 7, name: 'Brussels', country: 'Belgium' },
  { id: 8, name: 'Lisbonne', country: 'Portugal' }
]

export default function App() {
  const store = createStore (reducer);

 

  return (
    <Provider store = {store}>
    <View style={styles.container}>
      <ResultCities 
        data = {cities}    
      />
      <Cities 
        data = {cities}
      />
      <CitiesList/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
