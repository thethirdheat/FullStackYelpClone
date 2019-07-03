import React from 'react'
import LoginContainer from './session_form/login_container'
import SignUpContainer from './session_form/signup_container'
import GreetingContainer from './greeting/greeting_container'
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App =()=>(
<div>
    Look at Me!
    <header>
        <GreetingContainer/>
    </header>
    <Switch>
        <Route exact path = "/login" component ={LoginContainer}/> 
        <Route exact path = "/users/new" component ={SignUpContainer}/> 
    </Switch>

</div>)

export default App
//    <header>
//      <Link to="/" className="header-link">
//        <h1>Bench BnB</h1>
//      </Link>
//      <GreetingContainer />
//    </header>
//    <Switch>
//      <AuthRoute exact path="/login" component={LogInFormContainer} />
//      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
//      <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
//      <Route path="/benches/:benchId" component={BenchShowContainer} />
//      <Route exact path="/" component={SearchContainer} />
//    </Switch>