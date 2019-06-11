import React from 'react';

class Logout extends React.Component{
    
    log(){
        window.sessionStorage.removeItem('token');
        window.location = "/"
    }
    
    render() {
        return (
            <React.Fragment>
                { this.log() }
            </React.Fragment>
        )
    }
}

export default Logout