import { combineReducers } from "redux";
import sessionReducer from './session_reducer'
import EntitiesReducer from './entities_reducer'

export default combineReducers({
    entities: EntitiesReducer,
    session: sessionReducer

})