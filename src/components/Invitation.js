// Code Invitation Component Here
import React, {Component} from 'react';

export default class Invitation extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

Invitation.defaultProps = {
    title: "You've been invited!"
}