import React, { useState } from "react";
import "../styles/ProductForm.css";

function ProductForm({ onSubmit }) {
  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
  });

  // Handle input change and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert price to number
    onSubmit({
      ...formData,
      price: parseFloat(formData.price),
    });
    // Reset form
    setFormData({ name: "", description: "", origin: "", price: "" });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Coffee Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <div className="form-group">
        <label>Origin</label>
        <input
          type="text"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
