import React, { useState, useEffect } from 'react';
import './curd.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../head_foot/Navbar';

// ✅ Import images
import curd from '../img/mini.jpg';
import ghee from '../img/mini1.jpg';
import milk from '../img/mini2.jpg';

const Curd = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const navigate = useNavigate();

  // ✅ Updated product list with actual images
  const curdItems = [
    { id: 1, name: 'Curd 85g', price: 10, image: curd },
    { id: 2, name: 'Curd 500g', price: 35, image: curd },
    { id: 3, name: 'Ghee 250g', price: 150, image: ghee },
    { id: 4, name: 'Ghee 500g', price: 270, image: ghee },
    { id: 5, name: 'Milk 85g', price: 10, image: milk },
    { id: 6, name: 'Milk 500g', price: 35, image: milk },
  ];

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 }: cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div>

    <div className='bg_cart'>
      <Navbar />
      </div>
      <div className="curd-container">
        <h1 className="heading ">Our Products</h1>

        {/* ✅ Product List */}
        <div className="curd-list">
        
          {curdItems.map((item) => (
            <div key={item.id} className="curd-card">
              <img src={item.image} alt={item.name} className="curd-image" />
              <h2 className="curd-title">{item.name}</h2>
              <p className="curd-price">₹{item.price}</p>
              <button className="curd-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}


        </div>

        {/* ✅ View Cart Button */}
        <button className="view-cart-btn" onClick={goToCart}>
             View Carts ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
        
      </div>
    </div>
          
    // </div>
  );
};

export default Curd;
