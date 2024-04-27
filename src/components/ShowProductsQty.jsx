import React from 'react';
import { useSelector } from 'react-redux';

export const ShowProductsQty = () => {
  const prodsList = useSelector(state => state.products.prodsList.length);

  return (
    <div className="product-qty">
      <span>Product quantity:</span>
      <span>{prodsList}</span>
    </div>
  );
};