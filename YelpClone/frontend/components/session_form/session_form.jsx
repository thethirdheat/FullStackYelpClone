import React from 'react'
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            errors: this.props.errors,
            user: {
                username: "",
                password:"",
                email:""

            }
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.removeErr=this.removeErr.bind(this)
        this.demoLoginFacebook = this.demoLoginFacebook.bind(this)
        this.demoLoginGoogle = this.demoLoginGoogle.bind(this)
    } 
    demoLoginFacebook(e){
        e.preventDefault(); 
        const facebook= {username: 'FacebookUser', password:'password'}
        const google = {username: 'GoogleUser', password:'password'} 
        this.props.signIn({user: facebook}).then(()=>this.props.history.push('/'), ()=>{
            if(this.props.errors){
                let prev=Object.assign({},this.state)
                prev.errors= this.props.errors 
                this.setState(prev)
            }
        })
    }
    demoLoginGoogle(e){
        e.preventDefault(); 
        const google = {username: 'GoogleUser', password:'password'} 
        this.props.signIn({user: google}).then(()=>this.props.history.push('/'), ()=>{
            if(this.props.errors){
                let prev=Object.assign({},this.state)
                prev.errors= this.props.errors 
                this.setState(prev)
            }
        })
    }
    
    removeErr(){
        let prev=Object.assign({},this.state)
        prev.errors=""
        console.log(prev,"this s p the new state")
        this.setState(prev)
    }
    update(field){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev.user[field]= e.target.value
            return this.setState(prev) 
        }

    }


    handleSumbit(e){
        e.preventDefault();
        this.props.processSignUp({user: this.state.user}).then(()=>this.props.history.push('/'), ()=>{
            if(this.props.errors){
                let prev=Object.assign({},this.state)
                prev.errors= this.props.errors 
                this.setState(prev)
            }
        })
    }

    render(){
        console.log(this.state)
        const errDiv=this.state.errors.length ?<div className="login--errors">

        <p>{this.state.errors.join(", ")}.</p> <button onClick={this.removeErr} className="login--erors__cross">&times;</button>
        </div>:""

        return (<div className ="login">

            <nav className ="login--header">
                <div className ="login--header__container">
                    <div className="login--header__biz"  ><Link to ="/">SignUp as Business</Link> </div>
                    <br></br>
                    <div className="login--header__logo"><Link to ="/">🆁🅴🆅🆆</Link></div>
                </div>
            </nav>

            <aside className="login--left-addbar"></aside>

            {errDiv}

            <div className="login--main"> 

                <div className="login--form">

                    <h2 className="login--h1">Sign Up for Revw</h2>
                    <p className ="logn--text__signUp">Connect with great local businesses</p>



                    <div className="login--demo">
                        
                        <button onClick={ this.demoLoginFacebook} className="login--demo__facebook"><span><img className ="login--button__ficon" src='https://i.imgur.com/wEd2n4n.png'/></span><span className="login--button__text">Demo Login with Facebook</span></button> 
                        
                        <button onClick={this.demoLoginGoogle} className="login--demo__google"><span><img className ="login--button__gicon" src="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cae242fd3929/assets/img/structural/24x24_google_rainbow.png"/></span><span className="login--button__text__g">Demo Login with Google</span></button> 
                    </div>
                    <div className="SignUp--form__text"><p>Don't worry, we never post without your permission.</p></div>
                    <div className="login--demo__or">
                        <div className="login--demo__lineBreak"></div>
                        <p className="login--demo__ortext">&nbsp;&nbsp;OR&nbsp;&nbsp;</p> 
                        <div className="login--demo__lineBreak"></div>
                    </div>


                    <form onSubmit = {this.handleSumbit}>
                        <label>
                            <input type ="text" value ={this.state.username} placeholder="Username" onChange={this.update('username')}/> 
                        </label>
                        <br></br> 
                        <label>
                            <input type ="text" value ={this.state.email} placeholder="Email" onChange={this.update('email')}/> 
                        </label>
                        <br></br> 
                        <label>
                            <input type ="text" value ={this.state.password} placeholder="Password" onChange={this.update('password')}/> 
                        </label>
                        <br></br>
                        <button className="login--button" onClick={this.handleSumbit}>Sign Up</button>
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

export default withRouter(SessionForm)
//        return (<div>
//            Sign Up
//            <form onSubmit = {this.handleSumbit}>
//                <label>Username
//                    <input type ="text" value ={this.state.username} onChange={this.update('username')}/> 
//                </label>
//                <br></br>
//                <label>Email
//                    <input type ="text" value ={this.state.email} onChange={this.update('email')}/> 
//                </label>
//                <br></br>
//                <label>Password
//                    <input type ="text" value ={this.state.password} onChange={this.update('password')}/> 
//                </label>
//                <input type = "submit" value ="submit"/>
//            </form>
//        </div>)