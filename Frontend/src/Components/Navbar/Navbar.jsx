import { useRef, useState } from 'react';
import './Navbar.css'
import cart_icon from '../../static/images/cart-icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef();
    const logoRef = useRef();
    const menuToggle = (e) => {
        menuRef.current.classList.toggle('menu-visable');
        logoRef.current.classList.toggle('logo-invisible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">
            <Link ref={logoRef} className="navbar2" to='/'><b>Aura Ecommerce</b></Link>

            <div className="nav-dropdown" onClick={menuToggle}>Menu</div>
            <div ref={menuRef} className="nav-options">
                <Link className="navbar-link" to='/'>Home</Link>
                {localStorage.getItem('auth-token') ?
                    <li className="navbar-link" onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</li>
                    : <Link className="navbar-link" to='/Signup'>Login</Link>
                }

                <Link className="navbar-link" to='/Categories'>Categories</Link>
            </div>
            <div className="cart">
                <Link to='/Cart'><img className="cart-img" src={cart_icon} alt="cart icon" /></Link>
                <Link to='/Cart' className="nav-cart-counter">{getTotalCartItems()}</Link>
            </div>
        </div>
    );
};

export default Navbar