import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {ListForm} from './style'

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
        // RESEARCH //
        // this.props.history.push('/listings')
    }

    doGetAllListing = async () => {
        const userListings = await fetch(`http://localhost:8000/homes/${this.props.currentUser.userId}`)
        const userListingsToJson = await userListings.json()
        console.log(userListingsToJson, "hello")
        this.setState({
            homes: userListingsToJson.homes
        })
    }
    
    render() {
        console.log(this.state)
        return (
        <ListForm>
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
                            placeholder="Price"
                        />
                        <input type="text"
                            name="img"
                            value={this.state.img}
                            onChange={this.handleChange}
                            placeholder="Image Url"
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
                    {
                        this.state.homes ?
                        this.state.homes.map((home ,i) => {
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
                        }) : ''
                    }
                </div>
            </div>
        </ListForm>
        );
    }
}

export default withRouter(CreateListing);