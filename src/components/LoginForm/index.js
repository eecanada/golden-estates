import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            showError: null
        };

    }


    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
  }

    handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`http://localhost:8000/users/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        console.log(parsedResponse, " <- parsedResponse");
        if (parsedResponse.email) {
            console.log('you are in!!')
            this.props.history.push('/home')
        } else {
            this.setState({
                showError: true
            })
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <input type="text"
                            name="username"
                            // value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Username"
                        />
                        <br />
                        <input type="password"
                            name="password"
                            // value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {
                            this.state.showError ? <h2>email or password is incorrect</h2> : null
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);