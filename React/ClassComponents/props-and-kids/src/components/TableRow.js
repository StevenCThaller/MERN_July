import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        const { name, age, isAwful } = this.props;
        return (
            <tr>
                <td>{ name }</td>
                <td>{ age }</td>
                <td>{ isAwful ? "Yes" : "No" }</td>
            </tr>
        );
    }
}

export default TableRow;