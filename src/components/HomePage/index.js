import React, {Component} from 'react'
import {SplashPage} from './style'

import splashimage from '../../images/luxuryHome.jpeg'

const style={
    "width": "90rem", 
    "height": "48rem", 
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundImage": `url(${splashimage})`,
    'opacity' : '0.9',
    'filter': 'alpha(opacity=50)',  
}

class HomePage extends Component {
    state = {
        username: '',
        email : '',
    }


    
    render() {
        return(
            <div  style={style}>
            <SplashPage>
                <div>
                {/* <h1> Golden Estates </h1> */}
                <h1> Let's Find Your Dream Home</h1>
                </div>
            </SplashPage>
                {/* <button onClick="location.href='http://localhost:3000/alllistings'" type="button" class="btn btn-light"> Find Your Dream Home </button> */}
            </div>
        )
    }
}
export default HomePage

