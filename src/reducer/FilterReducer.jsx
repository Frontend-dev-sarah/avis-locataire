
const searchResultCities = dispatch => {
    return () => {
        dispatch({type: 'FILTER'})
    }
}

const initalState = {
    resultCities: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER':
            return {
                ...state, resultCities: action.payload
            }
        default:
            return state;
    } 
  }



