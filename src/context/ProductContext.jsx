import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Initialize products state
  const [products, setProducts] = useState([]);
  // Initialize store info state
  const [storeInfo, setStoreInfo] = useState(null);
  // Loading and error states for async operations
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "http://localhost:3000";

  // get initial data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to get products and store info from the backend
  const fetchData = async () => {
    try {
      setLoading(true);
      const [coffeeRes, storeRes] = await Promise.all([
        fetch(`${baseUrl}/coffee`),
        fetch(`${baseUrl}/store_info`),
      ]);

      if (!coffeeRes.ok || !storeRes.ok)
        throw new Error("Failed to fetch data");

      const coffeeData = await coffeeRes.json();
      const storeData = await storeRes.json();

      setProducts(coffeeData);
      setStoreInfo(storeData[0]); // Assuming store info is an array with one object
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Adding a new product
  const addProduct = async (newProduct) => {
    try {
      const res = await fetch(`${baseUrl}/coffee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (!res.ok) throw new Error("Failed to add product");
      const savedProduct = await res.json();
      setProducts([...products, savedProduct]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Updating an existing product
  const updateProduct = async (id, updatedProduct) => {
    try {
      const res = await fetch(`${baseUrl}/coffee/${id}`, {
        method: "PATCH", // or PUT
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      if (!res.ok) throw new Error("Failed to update product");
      const savedProduct = await res.json();
      setProducts(products.map((p) => (p.id === id ? savedProduct : p)));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, storeInfo, loading, error, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
