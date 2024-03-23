import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from '../contexts/AuthProvider';

const NavItems = () => {
    const { user, logout } = useContext(AuthContext);
    const [menuToggle, setMenuToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // Adding an event listener to handle header scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`} style={{ backgroundColor: 'white' }}>
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/* Logo */}
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                        </div>

                        {/* Menu items */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    {user && <li><Link to="/shop">Shop</Link></li>}
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    {menuToggle && (
                                        <li>
                                            {/* Conditionally render the Cart link */}
                                            {user ? (
                                                <Link to="cart-page">Cart</Link>
                                            ) : (
                                                <Link to="/login">Login</Link>
                                            )}
                                        </li>
                                    )}
                                    {/* Logout button */}
                                    {user && (
                                        <li>
                                            <button onClick={() => {
                                                logout();
                                            }}>Logout</button>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Cart button or Login button */}
                            {!user ? (
                                <Link to="/login" className="lab-btn me-3 d-none d-md-block">Login</Link>
                            ) : (
                                <Link to="cart-page" className="lab-btn me-3 d-none d-md-block">Cart</Link>
                            )}

                            {/* Menu toggler */}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavItems;