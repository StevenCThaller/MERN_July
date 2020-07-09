import React, { Component } from 'react';

class MyHeader extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <header>
                <h1>{ title }</h1>
                { children }
            </header>
        );
    }
}

export default MyHeader;