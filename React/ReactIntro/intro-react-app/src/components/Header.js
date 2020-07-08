import React, { Component } from 'react';
import MyComp from './MyComp';
import Second from './Second';

class Header extends Component {
    render() {
        return (
            <>
                <MyComp/>
                <Second/>
            </>
        );
    }
}

export default Header;