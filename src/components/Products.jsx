import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';
import { selectCartProducts } from '../store/productSlice';

export const Products = () => {
  const prodsList = useSelector(state => state.products.prodsList);
  const cartProducts = useSelector(selectCartProducts);

  return (
    <div className="products">
      <h2 className="products__title">Shop</h2>
      <div className="products__list">
        {prodsList.map(prod => (
          <Product key={prod.id} data={prod} />
        ))}
      </div>

      <h2 className="products__title">Cart</h2>
      <div className="products__list">
        {cartProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
