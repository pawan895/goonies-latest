import React from 'react';
import './HeaderStyle.css'

function Header(props) {
    return (
        <nav className='Header'>
            <a className = 'nav-elements' href='#plot'>Plot<span></span></a>
            <a className = 'nav-elements' href='#goonies'>Goonies<span></span></a>
            <a className = 'nav-elements' href='#credits'>Credits<span></span></a>
            <a className = 'nav-elements' href='#gallery'>Gallery<span></span></a>
        </nav>
    );
}

export default Header;