import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name] : e.currentTarget.value })
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      const registerResponse = await fetch('http://localhost:8000/users/:id/edit', {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const parsedResponse = await editResponse.json();
      console.log(parsedResponse)
      console.log('user had an edit')
      this.props.history.push('/login')
  }
  
  render() {
      return (
          <div >
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <br />
                      <input type="text"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                          placeholder="Username"
                      />
                      <br />
                      <input type="text"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          placeholder="Email"
                      />
                      <br />
                  
                      <input type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          placeholder="Password"
                      />
                      <br />
                     {this.state.error}
                      <br />
                      <input type="submit" value="Submit" />
                      <button onClick={this.getUser}> Edit User</button>
                      
                  </div>
              </form>
          </div>
      );
  }

}

    

export default withRouter(EditUser);