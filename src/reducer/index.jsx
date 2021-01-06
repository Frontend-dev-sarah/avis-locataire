import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { reducer as FilterReducer}  from './FilterReducer';

const config = {
    key: "root",
    storage: AsyncStorage
}

export default persistCombineReducers (config, {
    FilterReducer
})