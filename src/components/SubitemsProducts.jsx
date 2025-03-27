import React from 'react';
import Navbar from '../head_foot/Navbar';
import Footer from '../head_foot/Footer';

import mini from '../img/mini.jpg';
import mini1 from '../img/mini1.jpg';
import mini2 from '../img/mini2.jpg';

import './SubitemsProducts.css';
import { Link } from 'react-router-dom';

const SubitemsProducts = () => {
  const products = [
    {
      id: 1,
      image: mini,
      title: 'Curd',
      description: 'Fresh curd made from organic milk, rich in probiotics and nutrients.',
    },
    {
      id: 2,
      image: mini1,
      title: 'Ghee',
      description: 'Pure cow ghee prepared using traditional methods for authentic taste.',
    },
    {
      id: 3,
      image: mini2,
      title: 'Milk',
      description: 'Farm-fresh milk sourced from grass-fed cows for maximum nutrition.',
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="about-container">
        <div className="image-wrapper">
          {products.map((product) => (
            <div key={product.id} className="image-item">
              <img src={product.image} alt={product.title} className="about-image" />
              <div className="port-overlay-cont">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="btn_d">
        <button className="button">
          <Link to="/curd" style={{ textDecoration: 'none', color: 'white' }}>
            Show more
          </Link>
        </button>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default SubitemsProducts;
