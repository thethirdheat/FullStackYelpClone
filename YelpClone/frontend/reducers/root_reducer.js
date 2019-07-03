import { combineReducers } from "redux";
import sessionReducer from './session_reducer'
import EntitiesReducer from './entities_reducer'
import errors from './errors_reducer';

export default combineReducers({
    entities: EntitiesReducer,
    session: sessionReducer,
    //ui,
    errors

})