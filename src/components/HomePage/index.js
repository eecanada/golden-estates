import React, {Component} from 'react'

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
                <h3> Golden Estates </h3>
                
                <button onClick="location.href='http://localhost:3000/alllistings'" type="button" class="btn btn-light"> Find Your Dream Home </button>
            </div>
        )
    }
}
export default HomePage

