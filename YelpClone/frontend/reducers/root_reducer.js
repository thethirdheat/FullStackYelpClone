import { combineReducers } from "redux";
import EntitiesReducer from './entities_reducer'

export default combineReducers({
    entities: EntitiesReducer 

})