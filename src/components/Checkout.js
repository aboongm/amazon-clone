import React from 'react';
import '../assets/styles/Checkout.css';
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';

const Checkout = () => {
  console.log('hiiii');
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/I/21-Eq7XezyL.jpg"
            alt=""
          />
        </Link>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
