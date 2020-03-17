import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/freelancer" selected>Freelancers</a>
                <a href="/job">Find Job</a>
            </nav>
        </div>
    );
};

export default Header;