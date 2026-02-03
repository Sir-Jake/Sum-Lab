import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
