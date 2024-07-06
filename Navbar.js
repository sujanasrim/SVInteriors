// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SV_LOGO from './SV_LOGO.png';
import CartIcon from './CartIcon.png';

function Navbar({ cartItems = [] }) {
    return (
        <nav className='navbar'>
            <div className="logo-container">
                <img src={SV_LOGO} alt="SV_LOGO" />
            </div>

            <ul className='navLinks'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Services'>Services</Link>
                </li>
                <li>
                    <Link to='/ModularKitchenUnit'>Modular Kitchen Designs</Link>
                </li>
                <li>
                    <Link to='/ModularTVUnit'>Modular TV Designs</Link>
                </li>
                <li>
                    <Link to='/BalconyMakover'>Balcony Designs</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
                {/* Link to Cart page */}
                <li>
                    <Link to='/Cart' className="cart-link">
                        <img src={CartIcon} alt="Cart" className="cart-icon" />
                        <span className="cart-count">{cartItems.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
