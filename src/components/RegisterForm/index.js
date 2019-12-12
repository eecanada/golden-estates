import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class RegisterForm extends Component {
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
        this.props.handleRegister(this.state)
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
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(RegisterForm);