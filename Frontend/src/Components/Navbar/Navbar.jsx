import { useState } from 'react';
import './Navbar.css'
import cart_icon from '../../static/images/cart-icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className="navbar">
            <Link className="navbar2" to='/'><b>Aura Ecommerce</b></Link>
            
            <div className="nav-options">
                <Link className="navbar-link" to='/'>Home</Link>
                {localStorage.getItem('auth-token') ?
                    <li className="navbar-link" onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</li>
                    : <Link className="navbar-link" to='/Signup'>Login</Link>
                }

                <Link className="navbar-link" to='/Categories'>Categories</Link>
            </div>
            <div className="cart">
                <Link to='/Cart'><img className="cart-img" src={cart_icon} alt="cart icon" /></Link>
                <div className="nav-cart-counter">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar