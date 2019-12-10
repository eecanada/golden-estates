import React, {Component}  from 'react'


class Register extends Component{
    state = {
        username: '',
        email: '',
        password: ''
    }

    onChange = e =>                          
        this.setState({
            [e.target.name]: e.target.value
        })

    onSubmit = async e => {
        e.preventDefault()
        const { username, email, password } = this.state
        // bcrypt password 
        // fetch call - await 
          // method POST 
          // content-type
          // headers
          // body 
        // set authentication 
        // props.history.push
         
    }

    render() {
        // const { email, password, passwordT, error } = this.state
        // const isInvalid =
        //     password !== passwordTwo ||
        //     password === '' ||
        //     email === ''
        return (
            <div>
                <h1>SIGNUP</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                    <input type='text' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='text' name='passwordTwo' value={passwordTwo} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='submit' value='submit' disabled={isInvalid}/>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }
}




export default Register