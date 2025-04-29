import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import './App.css';

const App = () => {
  const [productId, setProductId] = useState('');

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🛒 Product Explorer</h1>
      </nav>

      <div className="search">
        <input
          type="text"
          placeholder="Enter product ID..."
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>

      <div className="content">
        <ProductList />
        {productId && <ProductDetail productId={productId} />}
      </div>
    </div>
  );
};

export default App;
