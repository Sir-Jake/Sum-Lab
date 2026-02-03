import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

function Shop() {
  // Consume global state from ProductContext
  const { products, loading, error, deleteProduct } =
    useContext(ProductContext);
  // Local state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) return <div className="loading">Loading coffee...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page shop-page">
      <div className="sidebar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Placeholder for filters if needed */}
        <div className="filters">
          <label>
            <input type="checkbox" /> Location 1
          </label>
          <label>
            <input type="checkbox" /> Location 2
          </label>
          <label>
            <input type="checkbox" /> Location 3
          </label>
          <label>
            <input type="checkbox" /> Location 4
          </label>
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={() => deleteProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
