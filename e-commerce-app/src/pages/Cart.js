import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>My Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{typeof item.price === 'string' ? item.price : 'N/A'}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            
            <button className="buy-now" onClick={() => navigate("/payment")}>Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;