import React from 'react'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password:"",
            email:""
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
        console.log("we are here??!")
        this.props.processSignUp({user: this.state}).then(()=>this.props.history.push('/'))
    }

    render(){
        return (<div>
            Login
            <form onSubmit = {this.handleSumbit}>
                <label>Username
                    <input type ="text" value ={this.state.username} onChange={this.update('username')}/> 
                </label>
                <br></br> 
                <label>Password
                    <input type ="text" value ={this.state.password} onChange={this.update('password')}/> 
                </label>
                <input type = "submit" value ="submit"/>
            </form>
        </div>)
    }

} 

export default withRouter(LoginForm)