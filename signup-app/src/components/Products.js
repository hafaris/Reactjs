import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Products.css';

const productSet = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
  { id: 4, name: 'Product 4', price: '$10' },
  { id: 5, name: 'Product 5', price: '$20' },
  { id: 6, name: 'Product 6', price: '$30' }
];

const Products = () => {
    const navigate = useNavigate();
    const addToCart = (product) => {
    alert(`${product.name} added to cart`);
  };

    const handleLogout = () => {
      navigate('/login');
    }
        return (
  <div className="product-catalogue">
    <h2>Product Catalogue</h2>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
    <div className="productSet">
      {productSet.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
    );
}

export default Products;