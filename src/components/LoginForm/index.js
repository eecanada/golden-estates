import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {LogForm} from './style'

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
        this.props.handleLogin(this.state)
       
        
    }


    render() {
        return (
            <LogForm>
            <div>
                <form  className="form-group" onSubmit={this.handleSubmit} >
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
        </LogForm>
        );
    }
}

export default withRouter(LoginForm);