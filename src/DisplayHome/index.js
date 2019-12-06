import React from 'react'

function DisplayHome (props){
  return(
    <div>
      <h1>{props.home.city}</h1>
    </div>
  )
}
export default DisplayHome




 // const homeList = props.homes.map((home, i)=>{
  //   return(
  //     <div key={i}> 
  //     <h1>  address: {home.city[0]}</h1> 
  //     <h1>  {home.street[0]} </h1>
  //     </div>
  //   )
  // })
  // console.log(props.homes.city[0], 'hellooooo')