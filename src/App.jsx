import React, { useState } from 'react';
import { AddProductForm } from './components/AddProductForm';
import { Products } from './components/Products';
import { ShowProductsQty } from './components/ShowProductsQty';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">SHOP</div>
        <div className="action-block">
          <div className="manage">
            <button onClick={() => setShowForm(prev => !prev)} className="manage__add-prod-form">
              {showForm ? 'Close Form' : 'Add Product Form'}
            </button>
          </div>
          <div className="cart">0</div>
        </div>
      </header>

      <main className="main">
        <ShowProductsQty />
        <Products />
      </main>

      <footer className="footer"></footer>

      {showForm && <AddProductForm />}
    </div>
  );
};

export default App;
