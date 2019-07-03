import {RECEIVE_SESSION, REMOVE_SESSION} from '../actions/session_actions'

const _nullUser = Object.freeze({
  id: null
});

const sessionsReducer = (state={},action)=>{
    Object.freeze(state)
    let newState = Object.assign({},state)
    console.log("we are in the sessions reducer!!!!!!!!!!1")
    switch(action.type){
        case RECEIVE_SESSION:
            return { id: action.currentUser.id };
        case REMOVE_SESSION:
            return _nullUser;
        default: 
            return state
    } 
}
export default sessionsReducer

