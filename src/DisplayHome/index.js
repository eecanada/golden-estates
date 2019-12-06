import React from 'react'

function DisplayHome (props){
  console.log(props, 'this is props')
  return(
    <div>
      <h1> address: </h1>
      <h3>{props.home.address.street}</h3>
      <h3>{props.home.address.city}</h3> - <br/>
      <img src={props.home.images.image[0].url} />
    </div>
  )
}
export default DisplayHome
