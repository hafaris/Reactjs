import React from "react";
import "./Products.css";

const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Smartphone", price: "₹57,999", image: "https://via.placeholder.com/150?text=Smartphone" },
    { id: 2, name: "Laptop", price: "₹82,499", image: "https://via.placeholder.com/150?text=Laptop" },
    { id: 3, name: "Smartwatch", price: "₹15,999", image: "https://via.placeholder.com/150?text=Smartwatch" },
    { id: 4, name: "Wireless Earbuds", price: "₹4,999", image: "https://via.placeholder.com/150?text=Earbuds" },
    { id: 5, name: "Gaming Console", price: "₹39,999", image: "https://via.placeholder.com/150?text=Console" },
    { id: 6, name: "Bluetooth Speaker", price: "₹3,499", image: "https://via.placeholder.com/150?text=Speaker" },
  ];

  return (
    <div className="products-container">
      <h2>Product Catalogue 🛍️</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
