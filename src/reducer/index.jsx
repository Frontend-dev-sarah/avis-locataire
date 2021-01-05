import { persistCombineReducer } from 'redux-persist';
import FilterReducer from './FilterReducer';

const config = {
    key: "root"
}

export default persistCombineReducer (config, {
    FilterReducer
})