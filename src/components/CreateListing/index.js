import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class CreateListing extends Component {
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

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.createListing(this.state)
        this.doGetAllListing()
    }

    doGetAllListing = async () => {
        const userListings = await fetch(`http://localhost:8000/homes/${this.props.currentUser._id}`)
        const userListingsToJson = await userListings.json()
        console.log(userListingsToJson.homes, "hello")
        this.setState({
            homes: userListingsToJson.homes || []
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br />
                        <input type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                            placeholder="address"
                        />
                        <br />
                        <input type="text"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
                            placeholder="city"
                        />
                        <br />
                    
                        <input type="text"
                            name="state"
                            value={this.state.state}
                            onChange={this.handleChange}
                            placeholder="state"
                        />
                        <input type="text"
                            name="salePrice"
                            value={this.state.salePrice}
                            onChange={this.handleChange}
                            placeholder="salePrice"
                        />
                        <input type="text"
                            name="img"
                            value={this.state.img}
                            onChange={this.handleChange}
                            placeholder="image upload"
                        />
                        <input type="text"
                            name="description"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="description"
                        />
                        <input type="submit" value="Submit" />
                        
                    </div>
                </form>
                <div>
                    {this.state.homes.map((h ,i) => {
                        return (
                            <div key={i}>
                                <p>{h.address}</p>
                                <p>{h.city}</p>
                                <p>{h.state}</p>
                                <p>{h.salePrice}</p>
                                <img src={h.img}/>
                                <p>{h.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(CreateListing);