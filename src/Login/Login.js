import React from 'react';
import axios from 'axios';
import { server } from '../server';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        axios.post(`${server.baseURL}/login/login`, {username, password})
        .then(res => {
            if(res.data['token'] == "loremipsum"){
                window.location = "/users"
            }else{
                alert("Username atau password salah")
            }
        })
    }

    render() {
        return (
            <div className="col-md-4">
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default Login;