import {connect} from 'react-redux'
import {signUp} from '../../actions/session_actions'
import SessionForm from './session_form'

const mstp = (state,prevProps) =>({ 
    errors: state.errors.session,
    user: "",
    password: "",
    email:""
})

const mdtp =  dispatch =>({
    processSignUp:(user)=> dispatch(signUp(user)) 
    }
)
export default connect(mstp,mdtp)(SessionForm)