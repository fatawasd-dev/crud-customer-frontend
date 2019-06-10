import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component{
    render() {
        return (
            <div className="col-md-4">
                <form onSubmit="">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" name="username" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="text" className="form-control" name="password" />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
                <input type="submit" value="Forget Password ?" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default Login;