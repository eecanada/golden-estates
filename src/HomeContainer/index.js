import React, {Component} from "react"
import DisplayHome from "../DisplayHome"

class HomeContainer extends Component{
  state = {
    home: null,
    address: "",
    citystatezip: "",
    rentzestimate: false,
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
    const parsedResponse = await zillowResponse.json()
    console.log(parsedResponse, "parsedResponse")
    this.setState({
      home: parsedResponse.data.address
    })
  } catch (err) {
    console.log(err)
  }
}

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="address" onChange={this.handleChange}/>
        <input type="text" name="citystatezip" onChange={this.handleChange}/>
        <input type="text" name="rentzestimate" onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
      {
        this.state.home
          ?
            <DisplayHome home={this.state.home} />
          :
            <div>..loading</div>
      }
    </div>
  )
}
}

export default HomeContainer