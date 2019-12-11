import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showError: null
        };

    }


    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        console.log(parsedResponse, " <- parsedResponse");
        if (parsedResponse.message === 'user is logged in') {
            this.props.closeAndLogUser(parsedResponse.data)
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
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder="Email"
                        />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
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

export default LoginForm;