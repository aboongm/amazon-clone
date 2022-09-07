import React from 'react';
import '../assets/styles/Home.css';
import img1 from '../assets/images/blur_livingRoom.jpg';
import Product from './Product';
import book from '../assets/images/logo.png';

const Home = () => (
  <div className="home">
    <div className="home_container">
      <img className="home_image" src={img1} alt="hero" />

      <div className="home_row">
        <Product
          title="The lean startup"
          price={29.99}
          image={book}
          rating={5}
        />
        <Product
          title="The lean startup"
          price={29.99}
          image={book}
          rating={5}
        />
      </div>

      <div className="home_row">
        {/* Product */}
        {/* product */}
        {/* product */}
      </div>

      <div className="home_row">{/* Product */}</div>
    </div>
  </div>
);

export default Home;
