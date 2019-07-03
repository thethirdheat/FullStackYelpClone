import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_SESSION
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_SESSION:
      return [];
    default:
      return state;
  }
};
