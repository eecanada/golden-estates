import React from 'react'

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

const HomePage = () => {
    return(
        <div className='taglines' style={style}>
            <h3> Golden Estates </h3>
            <button> Find Your Dream Home </button>
        </div>
    )
}
export default HomePage

