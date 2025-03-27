import React from 'react'
import Navbar from '../head_foot/Navbar'
import mini from '../img/mini.jpg';
import mini1 from '../img/mini1.jpg';
import mini2 from '../img/mini2.jpg';
// import farm from '../components./img_about/about_farm.webp'
import farm from './img_about/about_farm.webp'
import './about.css'
import Footer from '../head_foot/Footer';
import pro1 from '../components/img_about/pro1.jpg'
import pro2 from '../components/img_about/pro2.jpg'
import pro3 from '../components/img_about/pro3.jpg'


function About() {
  return (
    <div>
      <Navbar />
      <div className="about_bg">
        {/* <div className="container"> */}
        <h1>About page</h1>
        <p>"Welcome to company name, where quality meets passion."</p>
        {/* </div> */}


      </div>

      <div className="Our_vision" >
        <h1 className='text-center'>Our vision</h1>

        <p className='text-center'>Our aim is to meet the diverse needs of consumers every day by marketing and selling foods that are consistent and of high quality.</p>
        <div className="fleximg">


          <img src={mini} alt="" />
          <img src={mini1} alt="" />
          <img src={mini2} alt="" />
        </div>
      </div>


      <h1 className='text-center pt-4'>Owners</h1>

      <div className="container">
        
        <div className="profile flex_profile">
          <div className="img_pro">
            <div className="pro">
            <div className="div_left">
            <img src={pro3} alt="" />
            </div>
            <div className="div_right">
            <h1>ravi</h1>
            <h4>I'am the 4years experience of this filed</h4>
<p>We offer comprehensive farm services including crop planting, irrigation, harvesting, livestock care, and organic farming.</p>            </div>
            </div>
            
          

          </div>
          <div className="img_pro">
            <div className="pro">
            <div className="div_left">
            <img src={pro2} alt="" />
            </div>
            <div className="div_left">
            <h1>ravi</h1>
            <h4>I'am the 3years experience of this filed</h4>
            <p>We ensure sustainable farming through rainwater harvesting, renewable energy, and eco-friendly practices to boost productivity and farm health</p>
            </div>
            </div>
            
          

          </div>
       
        </div>

      </div>
      <div className="container">

      <div className="about_farm1">

        
        <h1>Our story
        </h1>
        <p>We have a vision of setting a new benchmark in the milk industry with superior quality dairy products, a sustainable ecosystem and a thriving relation with our farmers.
        </p>
        <img src={farm} alt="" width="" />
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default About
