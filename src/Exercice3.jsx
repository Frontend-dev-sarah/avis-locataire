import React,  { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import FilterBar from './components/FilterBar';

const ResultCities  = ({data}) => {
    const [searchCountry, setSearchCountry] = useState('');
    const [cities, setCities] = useState([]);
    const searchResultCities = () => {
      const check =  data.find( (item) => {
           return item.country.toLowerCase() == searchCountry.toLowerCase()
        }) 
        if (check) {

        return data.filter((result) => {
            if(result.country == searchCountry){
                const joined = cities.concat(result.name);
                return setCities(joined)
            }
        })
    } else {
        alert('The country you searched does not exist yet')
    }
    }

    return (
        <View style = {{marginBottom: 50, flex: 0.35}}>
        <FilterBar
        searchItem = {searchCountry}
        onChangeCountry = {(country) => setSearchCountry(country)}
        onSubmitEditing =  {() => searchResultCities()}
        />
        <Text>List of cities according to country search</Text>
        <ScrollView>
       {cities.map((city) => {
           return <Text key = {city+Math.random().toString()}>{city}</Text> 
       })}
        </ScrollView>
        </View>

    );
} 

export default ResultCities;