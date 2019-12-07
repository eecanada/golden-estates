import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import HomeContainer from './components/HomeContainer'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';

import * as ROUTES from './constants/routes'

import './App.css';


class App extends Component {
  render () {
    return( 
      <div >
        <NavBar/>
        
        <Switch>
          <Route exact path={ROUTES.HOME} render={()=> <div>HOME BABY </div>} />
          <HomeContainer />
          <HomePage />
        </Switch>

      </div>
    )
    }
  }
export default App;
