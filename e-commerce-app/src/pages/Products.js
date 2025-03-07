import React from "react";
import "./Products.css";

const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Smartphone", price: "57,999", image: "https://imgs.search.brave.com/2ZV-F4S8rLpmlV-AHHHqPqon5Y-2bb8tUaVrbem18-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTEzLW1pbmkuanBn" },
    { id: 2, name: "Laptop", price: "82,499", image: "https://imgs.search.brave.com/5YSrr0AMBC4lQYgNFPiYHWnG0_mfoL_Cou9hZRjI5so/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MjkxNDEyL3Bob3Rv/L2xhcHRvcC00NS1k/ZWdyZWUtb3Blbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Y2dtMDN2TXU2WFZz/X1oyc3M2ZWtJUjgw/RjFSQnJ4NHY5S2RG/VThRMEZzRT0" },
    { id: 3, name: "Smartwatch", price: "15,999", image: "https://imgs.search.brave.com/E3NSJnAGgZSwBJbi-2zErZXgvhYgaBEn22jAwB8d1UU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/MzI4Mjg2L3Bob3Rv/L3NtYXJ0d2F0Y2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVuczFVMmZqYzBN/NURJenhXOHFvOFdt/X0s3YWZ4Zk5sd1JX/YWlYczQ2UE09" },
    { id: 4, name: "Wireless Earbuds", price: "4,999", image: "https://imgs.search.brave.com/zywf1lWMs0I23CaAAlPh5iNtaSOMky-Cm5srYnvKaNI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI5/Nzg3NzE4L3Bob3Rv/L2Nsb3NlLXVwLWlt/YWdlLW9mLW5ldy1h/cHBsZS1pcGhvbmU3/LW1vY2t1cC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NFI3/c1FGV2VOQkdETU5i/Z1dBWEs3by1QR2dL/em93T0Y1d2hvSnJY/SDVhaz0" },
    { id: 5, name: "Gaming Console", price: "39,999", image: "https://imgs.search.brave.com/lrjV8SxXEUX0hK7r_Jaw6fLpiwtQ1oS2sjppDdndhI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbWVk/aWEucGxheXN0YXRp/b24uY29tL2lzL2lt/YWdlL1NJRVBEQy9w/czUtc2xpbS1lZGl0/aW9uLWxlZnQtaW1h/Z2UtYmxvY2stMDEt/ZW4tMjRqdW4yND8k/MTAwcHgtLXQk" },
    { id: 6, name: "Bluetooth Speaker", price: "3,499", image: "https://imgs.search.brave.com/JnLHjDuWEXPRyTAYH9RtaC4ZWivQmzt5Nhav7ERgF90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY0LzM3LzY0/LzM2MF9GXzE2NDM3/NjQwM19GSXg2a0Fu/UXBkSUxpSVNuN3B0/SU9xRU43SkJycjZm/dy5qcGc" },
  ];

  return (
    <div className="products-container">
      <h2>Electronic Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
