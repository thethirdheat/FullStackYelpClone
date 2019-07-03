import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

//const mstp = ({ session, entities: { users } }) => {
const mstp = (state,ownProps) => {
    let user =null
    if(state.session!==undefined){
      user = state.entities.user[state.session.id]
    }
    //let user = state.session.id||null
    //debugger
  return {
    //currentUser: users[session.id]
    currentUser: user
  };
};

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect( mstp, mdtp)(Greeting));
