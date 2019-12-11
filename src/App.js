import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import HomeContainer from './components/HomeContainer'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';

import * as ROUTES from './constants/routes'
 
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm'
import EditUser from './components/EditUser'


class App extends Component {
    state = {
      currentUser: ""
    }

  handleLogin = async(credentials) => {
    const loginResponse = await fetch(`http://localhost:8000/users/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        if (parsedResponse.data) {
            this.setState({
              currentUser: parsedResponse.data
            })
            this.props.history.push('/home')
        } else {
            this.setState({
                showError: true
            })
        }
  }

  handleRegister = async(credentials) => {
    const registerResponse = await fetch('http://localhost:8000/users/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(credentials),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  const parsedResponse = await registerResponse.json();
          if (parsedResponse.data) {
              this.setState({
                currentUser: parsedResponse.data
              })
              this.props.history.push('/home')
          } else {
              this.setState({
                  showError: true
              })
          }
    }
  

  render () {
    return( 
      <div >
        <NavBar/>
        
        <Switch>
          <Route exact path={ROUTES.HOME} component= {HomePage}/> 
          <Route exact path={ROUTES.SEARCH} component={HomeContainer} />
          <Route  exact path={ROUTES.SIGN_UP} component={() => <RegisterForm handleRegister={this.handleRegister}/>}/>
          <Route exact path={ROUTES.LOGIN} component={() => <LoginForm handleLogin={this.handleLogin} />}/>
          <Route exact path={ROUTES.EDIT} component={() => <EditUser currentUser={this.state.currentUser} />}/>
        </Switch>

      </div>
    )
    }
  }
export default withRouter(App);
