import React from 'react'
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import { server } from '../server';
import Nav from '../Inc/Nav';
import 'bootstrap/dist/css/bootstrap.css';

export default class Users extends React.Component{
    state = {
        customer: []
    }

    componentDidMount(){
        axios.get(`${server.baseURL}/customer/customer`)
        .then(res => {
            this.setState({ customer: res.data });
        })
    }

    tabRow(){
        return this.state.customer.map(function(object, i){
            return <TableRow obj={object} index={i} />
        });
    }

    render() {
        return (
            <div>
            <Nav />
            <Link to="/addCustomer">Tambah Data</Link>
            <table border="1" className="table table-striped">
                <thead className="thead-dark">
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Action</th>
                </thead>
                { this.tabRow() }
            </table>
            </div>
        )
    }
}