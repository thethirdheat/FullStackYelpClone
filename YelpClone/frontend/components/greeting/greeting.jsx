import React from 'react';
import { Link } from 'react-router-dom';

const Greeting =(props)=>{
    /* note tahte its porops.history.push to chagne the page basically nooooo match lul*/
    const onSend = (event)=>( 
        props.logout().then(res=>props.history.push('/wtfitsowrking??'))
    )

    const withUser =()=>(
        <div>
            <h2 className="">Hi, {props.currentUser.username}!</h2>
            <button className="" onClick={onSend}>Log Out</button >
        </div> 
    )

    const noUser =()=>(
        <nav>
            <Link to ="users/new">Sign Up</Link>
            <Link to ="/login">Sign In</Link> 
        </nav> 
    )
    return props.currentUser? withUser() : noUser()
}

export default Greeting;
