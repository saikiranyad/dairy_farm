import React, { useState } from 'react';
import Navbar from '../head_foot/Navbar';
import Footer from '../head_foot/Footer';

import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='con'>
    <div className="bg_contact">

    
        <Navbar />
        <div className="bg_contact1">

    
      <h1>Contact us</h1>
      <p>Feel free to contact us</p>
      </div>
    </div>
   
    <div className="contact-container">
      
      {/* ✅ Contact Details */}
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-details">
        <p><strong>Address:</strong> 123 Street, City, Country</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> contact@example.com</p>
      </div>

      {/* ✅ Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div>
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required 
          ></textarea>
        </div>

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </div>
    
  );
};

export default Contact;
