
//signup: should make an AJAX request that creates a new user.
//login: should make an AJAX request that creates a new session.
//logout: should make an AJAX request that deletes the current session.


export const signUp = (userForm)=>{

    return $.ajax({ method:"post", url:"/api/users", data:userForm})
}


export const login = (userForm)=>(
    $.ajax({ method:"post", url:"/api/session", data: userForm})
)

export const logout = (userForm)=>(
    $.ajax({ method:"delete", url:"/api/session"})
)

//export const createPost = post => (
//  $.ajax({
//    url: 'api/posts',
//    method: 'POST',
//    data: { post }
//  })
//);
//