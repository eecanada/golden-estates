import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ViewAllListings extends Component {
    constructor(props) {
        super(props);

        this.state = {
          address: '',
          city: '',
          state: '',
          salePrice: '',
          img: '',
          description: '',
          homes: []
        }
    }

    componentDidMount() {
        this.doGetAllListing()
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name] : e.currentTarget.value })
    }


    doGetAllListing = async () => {
        const userListings = await fetch(`http://localhost:8000/homes`)
        const userListingsToJson = await userListings.json()
        console.log(userListingsToJson ,"helo")
        this.setState({
            homes: userListingsToJson|| []
        })

    }
    
    render() {
        console.log(this.state)
        return (
            <div >
                <div>
                {this.state.homes.map((home ,i) => {
                        return (
                            <div key={i}>
                                <p>{home.address}</p>
                                <p>{home.city}</p>
                                <p>{home.state}</p>
                                <p>{home.salePrice}</p>
                                <img src={home.img}/>
                                <p>{home.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(ViewAllListings);