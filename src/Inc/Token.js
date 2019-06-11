import React from 'react';
import { login } from '../Login/Login';

export class Token extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: ""
        }
    }

    token = this.props.token;
}

export default Token