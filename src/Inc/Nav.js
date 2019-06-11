import React from 'react';
import Moment from 'react-moment';

class Nav extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Moment interval={1000} format="D MMMM YY, H:mm:ss" />
                            <nav className="navbar navbar-expand-lg bg-dark">
                            <a className="navbar-brand" href="#">Cust-App</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link" href="/users">Data Customer</a>
                                    <a className="nav-item nav-link" href="/logout">Log Out</a>
                                </div>
                            </div>
                        </nav>
            </React.Fragment>
        );
    }
}

export default Nav