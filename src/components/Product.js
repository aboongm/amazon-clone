import React from 'react';
import '../assets/styles/Product.css';
import PropTypes from 'prop-types';

const Product = ({ title, image, price }) => (
  <div className="product">
    <p className="product_info">{title}</p>
    <p className="product_price">
      <small>$</small>
      <strong>{price}</strong>
    </p>
    {/* <div className="product_rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p>stars</p>
        ))}
    </div> */}
    <img src={image} alt="" />
    <button type="button">Add to Basket</button>
  </div>
);

Product.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
