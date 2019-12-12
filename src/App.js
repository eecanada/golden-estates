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
import CreateListing from './components/CreateListing';
import ViewAllListings from './components/ViewAllListings';


class App extends Component {
    state = {
      currentUser: "",
      registerUser: '',
      home: []
    }


  handleListing = async()=>{

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
            this.setState({
              currentUser: parsedResponse
            })

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
          if (parsedResponse.email) {
              this.setState({
                currentUser: parsedResponse
              })
              this.props.history.push('/home')
          } else {
              this.setState({
                  showError: true
              })
          }
    }

    setCurrentUser = (currentUser) => {
      this.setState({
        currentUser
      })
    }
  
    createListing = async(credentials) => {
      const createResponse = await fetch('http://localhost:8000/homes', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ ...credentials, userId: this.state.currentUser.userId }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const parsedResponse = await createResponse.json();
            if (parsedResponse) {
                return parsedResponse
                // this.props.history.push('/listing')
            } else {
                this.setState({
                    showError: true,
                })
            }
      } 

  render () {
    return( 
      <div >
        <NavBar/>
        
        <Switch>
          <Route exact path={ROUTES.HOME} component= {HomePage}/> 
          <Route exact path={ROUTES.LISTINGS} component={()=> <CreateListing currentUser={this.state.currentUser} createListing={this.createListing}/>} />
          <Route exact path={ROUTES.SEARCH} component={HomeContainer} />
          <Route  exact path={ROUTES.SIGN_UP} component={() => <RegisterForm handleRegister={this.handleRegister}/>}/>
          <Route exact path={ROUTES.LOGIN} component={() => <LoginForm setCurrentUser={this.setCurrentUser} handleLogin={this.handleLogin} />}/>
          <Route exact path={ROUTES.EDIT} component={() => <EditUser setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />}/>
          <Route exact path={ROUTES.ALL_LISTINGS} component={ViewAllListings}/>
        </Switch>

      </div>
    )
    }
  }
export default withRouter(App);
