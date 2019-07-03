import * as APIutil from '../util/session_api_util'
export const RECEIVE_SESSION = "RECEIVE_SESSION"
export const REMOVE_SESSION = "REMOVE_SESSION"
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


  
const receive_session = (currentUser)=>({
    type: RECEIVE_SESSION,
    currentUser
})
const remove_session = ()=>({
    type: REMOVE_SESSION
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


//export const signUp = (userForm)=>{
export const signUp =(userForm)=>(dispatch)=>(
    APIutil.signUp(userForm).then(user=>(dispatch(receive_session(user))),
     (err=>dispatch(receiveErrors(err.responseJSON))))
)
//export const login = (userForm)
//export const login =(userForm) =>(dispatch) =>(
//    APIutil.login(userForm).then(user=>(dispatch(receive_session(user))),
//    err=>(dispatch(receiveErrors(err.responseJSON))))
//)

export const login = user => dispatch => (
  APIutil.login(user).then(user => (
    dispatch(receive_session(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);



//export const logout = (userForm)
export const logout = () => dispatch =>(
    APIutil.logout().then((something)=>dispatch(remove_session()))
)