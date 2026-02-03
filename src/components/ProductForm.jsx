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
        <label htmlFor="name">Coffee Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="origin">Origin</label>
        <input
          id="origin"
          type="text"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          required
          placeholder="Type here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
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
