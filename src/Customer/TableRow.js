import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { server } from '../server';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';

class TableRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      no: 0
    }
  }

    deleteData(id){
        axios.delete(`${server.baseURL}/customer/delete?customerID=${id}`)
        .then(data => {
            window.location.reload();
        })
    }

  render() {
    return (
      <tbody>
        <tr>
          <td>{ this.props.index + 1 }</td>
          <td>{this.props.obj.first_name}</td>
          <td>{this.props.obj.last_name}</td>
          <td>{this.props.obj.email}</td>
          <td>{this.props.obj.phone}</td>
          <td>{this.props.obj.address}</td>
          <td>{this.props.obj.description}</td>
          <td>{this.props.obj.created_at}</td>
          <td><Link to={`/edit/${this.props.obj._id}`} className="btn btn-primary"> Update</Link> | <button type="submit" onClick={() => {this.deleteData(this.props.obj._id)}} className="btn btn-danger">Delete</button></td>
      </tr>
      </tbody>
    );
  }
}

export default TableRow;
