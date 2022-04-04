import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
    <nav className='nav-container'>
        <Link to="/home">HOME</Link>
        <Link to="/reviews">REVIEWS</Link>
        <Link to="/dashboard">DASHBORAD</Link>
        <a href="#">BLOGS</a>
        <a href="#">ABOUT</a>
    </nav>
    );
};

export default Header;