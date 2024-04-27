import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, addProductToCart } from '../store/productSlice';

export const Product = (props) => {
  const dispatch = useDispatch();
  const { id, price, title, descr, img } = props.data;

  const addToCart = () => {
    dispatch(addProductToCart({ productId: id }));
  };

  const removeFromCart = () => {
    dispatch(removeProductFromCart({ productId: id }));
  };

  return (
    <div className="product" data-id={id}>
      <div className="product__img">
        <img src={img} alt="" />
      </div>
      <h3 className="product__title">{title}</h3>
      <p className="product__descr">{descr}</p>
      <div className="product__add-cart-block">
        <div className="product__price">{price}</div>
        <button className="btn product__add-cart-btn" onClick={addToCart}>
          Add to cart
        </button>
        <button className="btn product__remove-from-cart-btn" onClick={removeFromCart}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};
