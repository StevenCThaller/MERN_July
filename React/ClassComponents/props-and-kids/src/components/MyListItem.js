import React, { Component } from 'react';

class MyListItem extends Component {
    render() {
        const { name, age, isAwful } = this.props;
        return (
        <li className={ isAwful ? 'awful' : 'dope' }>{name} is {age} years old, and {
            isAwful ? 'is pretty terrible' : 'is pretty dope'
     }</li>
        );
    }
}

export default MyListItem;