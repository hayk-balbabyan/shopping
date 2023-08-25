import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Link to="/">
                <img src={logo} alt="React Logo" className="h-8" width="100" />
            </Link>
            <div className={'flex gap-20'}>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </header>
    );
};

export default Header;
