import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';

export const AddProductForm = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    const newProduct = {
      id: 4,
      price: 4000,
      title: 'new product',
      descr: 'new desct',
      img: 'new-img.jpg',
      publish: true,
    };

    dispatch(addProduct({ product: newProduct }));
  };

  return (
    <div className="form">
      <label>
        Product title:
        <input type="text" />
      </label>
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};
