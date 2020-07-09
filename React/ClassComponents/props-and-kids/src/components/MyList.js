import React, { Component } from 'react';

class MyList extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <>
            <h4>{ title }</h4>
            <ul>
                { children }
            </ul>
            </>
        );
    }
}

export default MyList;