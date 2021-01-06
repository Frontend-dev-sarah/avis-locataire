import React,  { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FilterBar from '../src/components/FilterBar';
import { searchResultCities } from './reducer/FilterReducer';

class CitiesList extends Component {
    state = {
        searchCountry: "",
    }

    render () {
    const { CityList, SearchList, searchCities } = this.props;
    const { searchCountry } = this.state;

    const searchCity = () => {

       return CityList.filter( (item)=> {
            if (item.country.toLowerCase() == searchCountry.toLowerCase()) {
                return item.name
            }
        })
    
    }

        return(
            <View style ={{marginBottom: 50, flex: 0.35}}>
                <FilterBar
                 searchItem = {searchCountry}
                 onChangeCountry = {(searchCountry) => this.setState({searchCountry})}
                 onSubmitEditing =  {() => searchCities(searchCity())}
                />
                <Text style={{marginBottom: 10}}>(Using Redux): List of cities according to country search</Text>
                <FlatList
                 data = {SearchList}   
                 keyExtractor = {(item, index) => `${item.id}-searchlist-${Math.random().toString()}`}
                 renderItem = {({item}) => <Text>{item.name}</Text>}/>

            </View>
        );
    }
}
const mapStateToProps = state =>{
    return {    
        CityList: state.FilterReducer.cityList,
        SearchList: state.FilterReducer.resultCities
    }
}


const mapDispatchToProps = dispatch =>({
    searchCities: (result) => {
        dispatch(searchResultCities(result))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

