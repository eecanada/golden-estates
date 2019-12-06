import React, {Component} from 'react'

class HomeContainer extends Component{
  state = {
    home : [],
    street: "",
    city: "",
    state: "",
    zipid: ""
  }

handleChange = (e) => {
  this.setState({
    [e.currentTarget.name]: e.currentTarget.value
  })
  console.log(this.state)
}

handleSubmit = async (e) => {
  console.log('hit')
  e.preventDefault()
  try {
    const zillowResponse = await fetch("http://localhost:8000",{
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json" 
      }
    })
    console.log(zillowResponse, "response")
    const parsedResponse = await zillowResponse.json()
    console.log(parsedResponse, "parsedResponse")
    this.setState({
      house: parsedResponse.data
    })
    console.log(this.state)
  } catch (err) {
    console.log(err)
  }
}

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="street" onChange={this.handleChange}/>
        <input type="text" name="city" onChange={this.handleChange}/>
        <input type="text" name="state" onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
}

export default HomeContainer