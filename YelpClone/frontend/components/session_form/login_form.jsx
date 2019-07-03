import React from 'react'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "Username",
            password:"Password",
        }
        this.handleSumbit = this.handleSumbit.bind(this)
    } 

    update(field){
        return (e)=>(
            this.setState({[field]: e.target.value}) 
        )

    }
    handleSumbit(e){
        e.preventDefault();
        this.props.processSignUp({user: this.state}).then(()=>this.props.history.push('/'))
    }

    render(){
        return (<div className ="login">
            <nav className ="login--header">
                <Link to ="/">yelp</Link> 
            </nav>
            <aside className="login--left-addbar"></aside>
            <div className="login--main"> 

                <div className="login--form">
                    <h1>Log In to Revw</h1>
                    <p>New to Revw? <Link to ='/users/new'>Sign up</Link></p>
                    <form onSubmit = {this.handleSumbit}>
                        <label>Username
                            <input type ="text" value ={this.state.username} onChange={this.update('username')}/> 
                        </label>
                        <br></br> 
                        <label>Password
                            <input type ="text" value ={this.state.password} onChange={this.update('password')}/> 
                        </label>
                        <button onClick={this.handleSumbit}>Log In</button>
                    </form>
                    <p>New to Revw? <Link to="/users/new">Sign Up</Link></p>

                </div>
                <div className="login--picture">
                    <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"/>
                </div>
            </div>
            <aside className="login--right-addbar"></aside>
            <div className="login--footer"></div>
        </div>)
    }

} 

export default withRouter(LoginForm)