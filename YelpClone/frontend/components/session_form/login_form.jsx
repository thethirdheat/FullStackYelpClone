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
                <div className ="login--header__container">
                    <div className="login--header__biz"  ><Link to ="/">SignUp as Business</Link> </div>
                    <br></br>
                    <div className="login--header__logo"><Link to ="/">revw</Link></div>
                </div>
            </nav>
            <aside className="login--left-addbar"></aside>
            <div className="login--main"> 

                <div className="login--form">
                    <h2 className="login--h1">Log In to Revw</h2>
                    <p className ="logn--text__signUp">New to Revw? <Link to ='/users/new'>Sign up</Link></p>

                    <div className="login--demo">
                        
                        <button className="login--demo__facebook"><span><img className ="login--button__ficon" src='https://i.imgur.com/wEd2n4n.png'/></span><span className="login--button__text">Demo Login with Facebook</span></button> 
                        
                        <button className="login--demo__google"><span><img className ="login--button__gicon" src="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cae242fd3929/assets/img/structural/24x24_google_rainbow.png"/></span><span className="login--button__text__g">Demo Login with Google</span></button> 
                                            </div>


                    <form onSubmit = {this.handleSumbit}>
                        <label>
                            <input type ="text" value ={this.state.username} onChange={this.update('username')}/> 
                        </label>
                        <br></br> 
                        <label>
                            <input type ="text" value ={this.state.password} onChange={this.update('password')}/> 
                        </label>
                        <br></br>
                        <button className="login--button" onClick={this.handleSumbit}>Log In</button>
                    </form>
                    <p className="login--form__botText">New to Revw? <Link to="/users/new">Sign Up</Link></p>

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