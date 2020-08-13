import React, {Component} from 'react';
import HelloListItem from './HelloListItem';
class HelloList extends Component{
    render(){
        return (
            <li>
                <ul><HelloListItem name = 'Name' value = 'Kang SeokJu'></HelloListItem></ul>
                <ul><HelloListItem name='Age' value='25'></HelloListItem> </ul>
                <ul><HelloListItem name='Field' value='BackEnd(Java/Spring) FrontEnd(React.js)'></HelloListItem></ul>
            </li>
        );
    }
}
export default HelloList;