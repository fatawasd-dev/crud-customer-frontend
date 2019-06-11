import React from 'react';
import axios from 'axios';
import { server } from '../server';
import Token from '../Inc/Token';
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

    login(){
        const { username, password } = this.state;
        var headers = {
            "Content-Type": "application/json",
            "Authorization": "loremipsum"
        }
        axios.post(`${server.baseURL}/login/login`, {username, password}, {headers: headers})
        .then(res => {
            if(res.data['token'] == "loremipsum"){
                window.sessionStorage.setItem('token', res.data['token']);
                window.sessionStorage.setItem('nama', username)
                window.location = "/users";
            }else{
                alert("Username atau password salah")
            }
        })
        // axios.request({
        //     method: 'post',
        //     url: `${server.baseURL}/login/login`,
        //     data: {
        //         username: username,
        //         password: password
        //     },
        //     headers: {
        //         token: "loremipsum"
        //     }
        // }).then(res => {
        //     window.location = "/users"
            
        // })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.login();
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