import React from 'react';
import '../assets/styles/Product.css';
import PropTypes from 'prop-types';
// import star from '../assets/images/star.png';

const Product = ({
  title, image, price, rating,
}) => (
  <div className="product">
    <div className="product_info">
      <p>{title}</p>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p key={_}>star</p>
          ))}
      </div>
    </div>
    <img src={image} alt="" />
    <button type="button">Add to Basket</button>
  </div>
);

Product.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Product;
