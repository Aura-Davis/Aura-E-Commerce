import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'



const CartItems = () => {

    const { all_product, getCartTotal, cartItems, removeFromCart } = useContext(ShopContext);

    if (all_product.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        return (
            <div className="cart-items">
                <h1>Cart</h1>
                <div className="cart-items-main">
                    <p>Items</p>
                    <p></p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((product, index) => {
                    if (cartItems[product.id] > 0) {
                        return <div key={index}>
                            <div className="cart-items-main">
                                <img src={product.image} alt="" className="image" />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button className="cart-items-quantity">{cartItems[product.id]}</button>
                                <p>${product.price * cartItems[product.id]}</p>
                                <button onClick={() => { removeFromCart(product.id) }}>remove</button>
                            </div>
                            <hr />
                        </div>
                    }
                    return null;
                })}
                <div className="cart-items-down">
                    <div className="cart-items-total">
                        <h1>Totals</h1>
                        <div>
                            <div className="cart-items-total-item">
                                <p>Subtotal</p>
                                <p>${getCartTotal()}</p>
                            </div>
                            <hr />
                            <div className="cart-items-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cart-items-total-item">
                                <h3>Total</h3>
                                <h3>${getCartTotal()}</h3>
                            </div>
                        </div>
                        <button>Checkout</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default CartItems