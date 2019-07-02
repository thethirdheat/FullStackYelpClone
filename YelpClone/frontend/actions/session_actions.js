import * as APIutil from '../util/session_api_util'
export const RECEIVE_SESSION = "RECEIVE_SESSION"
export const REMOVE_SESSION = "REMOVE_SESSION"

const receive_session = (user)=>({
    type: RECEIVE_SESSION,
    user
})
const remove_session = ()=>({
    type: REMOVE_SESSION
})


//export const signUp = (userForm)=>{
export const signUp =(userForm)=>(dispatch)=>(
    APIutil.signUp(userForm).then((user)=>dispatch(receive_session(user)))
)
//export const login = (userForm)
export const login =(userForm) =>(dispatch) =>(
    APIutil.login(userForm).then((user)=>dispatch(receive_session(user)))
)
//export const logout = (userForm)
export const logout = () => dispatch =>(
    APIutil.logout().then((something)=>dispatch(remove_session()))
)