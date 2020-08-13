import React, {Component} from 'react';

class temp extends Component{
    render(){
        return (
            <h1>{this.props.name} : {this.props.value}</h1>
        );
    }
}
export default temp;