import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import "../styles/AdminPortal.css";

function AdminPortal() {
  const { addProduct } = useContext(ProductContext);

  // Handle adding a new product
  const handleAddProduct = (productData) => {
    addProduct(productData);
    alert("Product Added Successfully!");
  };

  return (
    <div className="page admin-page">
      <div className="admin-container">
        <h1>Add New Coffee</h1>
        <ProductForm onSubmit={handleAddProduct} />
      </div>
    </div>
  );
}

export default AdminPortal;
