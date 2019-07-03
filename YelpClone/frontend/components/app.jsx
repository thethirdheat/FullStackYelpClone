import React from 'react'
import LoginContainer from './session_form/login_container'
import SignUpContainer from './session_form/signup_container'
import GreetingContainer from './greeting/greeting_container'
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dummy from './dummythick'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
//    <header>
//        <div className="fuck">get fucked</div>
//        <GreetingContainer />
//    </header>

        //<ProtectedRoute exact path ='/wtfitsowrking??' component ={Dummy}/>
const App =()=>(
<div className ="stuff">
    <Switch>
        <AuthRoute exact path = "/login" component ={LoginContainer}/> 
        <AuthRoute exact path = "/users/new" component ={SignUpContainer}/> 
        <ProtectedRoute exact path ="/" component={Dummy}/>
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