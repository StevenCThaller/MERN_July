import React, { Component } from 'react';

class MyTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Awful</th>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export default MyTable;