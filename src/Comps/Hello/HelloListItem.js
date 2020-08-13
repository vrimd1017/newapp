import React, {Component} from 'react';

class HelloListItem extends Component{
    render(){
        return (
            <h1>{this.props.name} : {this.props.value}</h1>
        );
    }
}
export default HelloListItem;