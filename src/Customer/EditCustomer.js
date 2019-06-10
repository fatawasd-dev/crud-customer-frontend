import React from 'react';
import axios from 'axios';
import { server } from '../server';
import Nav from '../Inc/Nav';
import 'bootstrap/dist/css/bootstrap.css';

class EditCustomer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get(`${server.baseURL}/customer/customer/`+this.props.match.params.id)
        .then(res => {
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
                phone: res.data.phone,
                address: res.data.address,
                description: res.data.description
            })
        })
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, phone, address, description } = this.state;
        axios.put(`${server.baseURL}/customer/update?customerID=${this.props.match.params.id}`, {first_name, last_name, email, phone, address, description})
        .then(res => {
            window.location = "/users"
        })
    }

    render(){
        return(
            <div>
                <Nav />
                <h1>Create Customer</h1>
                <form onSubmit={this.handleSubmit}>

                <div className="col-md-4">
                    <div className="form-group">
                            <label for="first_name">First Name</label>
                            <input type="text" name="first_name" className="form-control" value={this.state.first_name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="last_name">Last Name</label>
                            <input type="text" name="last_name" className="form-control" value={this.state.last_name}  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" className="form-control" value={this.state.email}  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" name="phone" className="form-control" value={this.state.phone}  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="address">Address</label>
                            <textarea name="address" className="form-control" value={this.state.address}  onChange={this.handleChange} ></textarea>
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <input type="text" name="description" className="form-control" value={this.state.description}  onChange={this.handleChange} />
                        </div>
                        <input type="submit" value="Update" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditCustomer;