import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="description">{product.description}</p>
      <div className="details">
        <span className="origin">Origin: {product.origin}</span>
        <span className="price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ProductCard;
