export const searchResultCities = (result) => ({
    type: 'FILTER', payload: result
}) 

const initialState = {
    cityList: [
        { id: 1, name: 'New York', country: 'United States' },
        { id: 2, name: 'London', country: 'England' },
        { id: 3, name: 'Berlin', country: 'Germany' },
        { id: 4, name: 'Paris', country: 'France' },
        { id: 5, name: 'Madrid', country: 'Spain' },
        { id: 6, name: 'Rome', country: 'Italy' },
        { id: 7, name: 'Brussels', country: 'Belgium' },
        { id: 8, name: 'Lisbonne', country: 'Portugal' }
      ],
      resultCities: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER':
            return {
                ...state, resultCities: state.resultCities.concat(action.payload)
            }
        default:
            return state;
    } 
  }



