import React from 'react';
import Navbar from '../head_foot/Navbar';
import Footer from '../head_foot/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './home.css';

// Images
import milk1 from '../img/milk1.jpg';
import milk2 from '../img/milk2.jpg';
import milk3 from '../img/milk3.jpg';
import bottle from '../img/milk_bottle.png';
import prot from '../img/protected cows.jpg'
import mini from '../img/mini.jpg'
import mini1 from '../img/mini1.jpg'
import mini2 from '../img/mini2.jpg'
import protect from '../img/protected_animals.jpg'
import SubitemsProducts from './SubitemsProducts';

const Home = () => {
  const images = [milk1, milk2, milk3];

  return (
    <div>
      <Navbar />
      <div className="home_bg">
        <h1>Home page</h1>
        <p>A farm business involves crop and livestock production, market demand, supply chain, profit, sustainability, and effective resource management.</p>
      </div>
      <div className="home-container">
        {/* ✅ Swiper Section */}
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            effect="fade"
            grabCursor={true}
            simulateTouch={true}
            draggable={true}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="image-wrapper">
                  <img src={img} alt={`Milk ${index + 1}`} className="slide-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✅ Content Section */}
        <div className="content-home">
          <h1>Our Milk Takes Daily Exams!</h1>
          <p>
            From grass to glass, farm-fresh milk is nature's purest gift — rich in goodness, straight from happy cows nurtured with care. Every drop tells a story of health, strength, and purity, delivering the essence of the farm to your glass. Wholesome and natural, it's the simple taste of tradition and nourishment, bringing comfort and vitality to every sip. 🥛🐄🌾
          </p>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="container">


        <div className="bottle">
          <div className="child_b">
            <img src={bottle} alt="" />
          </div>
          <div className="child_b1 b">
            <h1>FRESH MILK<br></br>
              HOME DELIVERED</h1>
            <div className="bottle1">


              <div className="div">
                <h1>100% NATURAL</h1>
                <p>Our cows are naturally grazed. We feed natural fodder and cattle feed. Free of Growth hormone, Antibiotic, and Preservatives.</p>
              </div>
              <div className="div">
                <h1>FARM FRESH</h1>
                <p>Our goal is to serve the freshest milk. Fresh milk is delivered from our farms to your home as quickly as possible with strict cold-chain.</p>
              </div>
            </div>
            <div className="bottle1">


              <div className="div">
                <h1>HYGIENICALLY PRODUCED</h1>
                <p>We pay close attention to our cows' hygiene. They are washed regularly and their health is maintained very well.</p>
              </div>
              <div className="div">
                <h1>UNPROCESSED MILK</h1>
                <p>We believe in consuming fresh milk. It tastes better and rich in vitamins and minerals compared to processed milk.</p>
              </div>
            </div>
            <div className="bottle1">

              <div className="div">
                <h1>FROM HAPPY COWS</h1>
                <p>
                  Our cows are treated with love and care. We provide quality fodder, cattle feed, and nice shelter for them to live happily.
                </p>
              </div>
              <div className="div">
                <h1>FREE OF ANTIBIOTIC & HORMONE</h1>
                <p>We don't use growth hormones or use milk from cows that are treated with antibiotics. Our milk is safe and healthy.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ---------- */}

      <div className="attch">
        <div className="content">
          <div className="pp">
            <h1>OUR PASSION</h1>
            <p>We protect animals by providing shelter, food, and medical 
              care. Our rescue, rehabilitation, and adoption programs ensure
               a safe and healthy environment for all animals. 🐾❤️</p>        
                   <img src={prot} alt="" width="250" height="210" className='gap-3 mm' />
                   <img src={protect} alt="" width="250" height="210" className='mm' />
                   <p>We care for animals through rescue, shelter, and medical support. Our programs promote adoption, prevent cruelty, and ensure animals live in a safe, loving environment. 🐾❤️</p>  
            {/* <p>We have set out to serve Gomathas and follow our tradition. We believe our tradition is rich and enables us to live a happy and healthy lifestyle. Our Gomathas play a very crucial role in our tradition.</p> */}
          </div>
          <div className="content1">
            {/* ----- */}
            <div className="bottle11">

              <div className="div1 ">
                <h1>PROTECT COWS
                </h1>
                <p>
                  We take care of cows even when they stop giving milk </p>
                <h1 className=''>PRESERVE DESI COWS
                </h1>
                <p className=''>We protect desi cows by promoting desi cow products </p>
              </div>
              <div className="div1">
                <h1>ORGANIC FARMING
                </h1>
                <p>We make organic fertilizers and pesticides for organic farming

                </p>
                <h1>FOLLOW TRADITION
                </h1>
                <p>We follow traditional methods while making our dairy products

                </p>
              </div>
              {/* ----- */}


            </div>


          </div>
        </div>

      </div>


      {/* ------------ */}
      <SubitemsProducts />
      {/* <SubitemsProducts> */}
      <Footer />
    </div>
  );
};

export default Home;
