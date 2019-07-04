import {connect} from 'react-redux'
import {login} from '../../actions/session_actions'
import LoginForm from './login_form'

const mstp = (state,prevProps) =>({ 
    errors: state.errors.session,
    user: "",
    password: "",
    email:""
})

const mdtp =  dispatch =>({
    processSignUp:(user)=> dispatch(login(user)) 
    }
)
export default connect(mstp,mdtp)(LoginForm)