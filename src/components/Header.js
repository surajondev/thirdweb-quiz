import React from 'react';
import CustomConnect from './connectButton';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo'>
                <h1>thethirdweb quiz</h1>
            </div>
            <div className='link'>
                <p>Quiz API</p>
                <p>Resources</p>
                <p>About</p>
            </div>
            <div className='headerButton'>
                <CustomConnect />
            </div>
        </div>
    );
}

export default Header;