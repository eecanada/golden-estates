import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import HomeContainer from './components/HomeContainer'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';

import * as ROUTES from './constants/routes'

import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm'


class App extends Component {
  render () {
    return( 
      <div >
        <NavBar/>
        
        <Switch>
          <Route exact path={ROUTES.HOME} component= {HomePage}/> 
          <Route exact path={ROUTES.SEARCH} component={HomeContainer} />
          <Route  exact path={ROUTES.SIGN_UP} component={RegisterForm}/>
          <Route exact path={ROUTES.LOGIN} component={LoginForm}/>
        </Switch>

      </div>
    )
    }
  }
export default App;
