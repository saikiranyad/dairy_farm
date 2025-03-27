import React, { useState, useEffect } from 'react';
import Navbar from '../head_foot/Navbar';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // ✅ Update localStorage when cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // ✅ Increase/Decrease Quantity
    const updateQuantity = (id, change) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + change }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove if quantity becomes zero
        );
    };

    // ✅ Calculate Total Price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div>
            <Navbar />
            <div className="cart-container">
                <div className="flex_add ">

                
                <h1>Shopping Cart</h1>
                <button className="add-more-btn">
                    <Link to="/curd" className="add-more-link">Add more</Link>
                </button>
                </div>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <ul className="cart-list">
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-image" />
                                    <div className="cart-details">
                                        <p className="cart-name">{item.name}</p>
                                        <p className="cart-price">₹{item.price}</p>

                                        {/* ✅ Quantity Controls */}
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* ✅ Display Total Price */}
                        <div className="total-price">
                            <strong>Total Price:</strong> ₹{totalPrice}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
