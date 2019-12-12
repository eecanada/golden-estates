import React, {Component} from "react"
import DisplayHome from "../DisplayHome"
import {HomeForm} from './style'

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
    console.log(parsedResponse.data.images.image[0].url, "parsedResponse")
    console.log(parsedResponse)
    this.setState({
      home: parsedResponse.data
    })
  } catch (err) {
    console.log(err)
  }
}

render(){
  console.log(this.state)
  return(
  <HomeForm>
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="address" onChange={this.handleChange}/>
          <input type="text" name="citystatezip" onChange={this.handleChange}/>
          {/* <input type="text" name="rentzestimate" onChange={this.handleChange}/> */}
          <input type="submit" value="Submit"/>
        </form>
        
        {
          this.state.home
            ?
              <div>
                <DisplayHome home={this.state.home} />
              </div>
            :
              <div> FIND YOUR DREAM HOME </div>
        }
      </div>
    </HomeForm>
  )
}
}

export default HomeContainer