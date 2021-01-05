import React,  { useState } from 'react';
import { Text, View } from 'react-native';
import FilterBar from './components/FilterBar';

const ResultCities  = ({data}) => {
    const [searchCountry, setSearchCountry] = useState('');
    const [cities, setCities] = useState([]);
    const searchResultCities = () => {
        return data.filter((result) => {
            if(result.country == searchCountry){
                const joined = cities.concat(result.name);
                return setCities(joined)
            } else {
                alert("Your country does not exist yet")
            }
        })
    }

    return (
        <View style = {{marginBottom: 50}}>
        <FilterBar
        searchItem = {searchCountry}
        onChangeCity = {(country) => setSearchCountry(country)}
        onSubmitEditing =  {() => searchResultCities()}
        />
        <Text>List of cities according to country search</Text>
        <View>
       {cities.map((city) => {
           return <Text>{city}</Text>
       })}
        </View>
        </View>

    );
} 

export default ResultCities;