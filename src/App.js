import "./App.css";
import { PRODUCTS } from "./assets/data/products";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Cart from "./pages/Cart/Cart";
import Laptops from "./pages/Categories/Laptops";
import Phones from "./pages/Categories/Phones";
import Watches from "./pages/Categories/Watches";
import Keyboards from "./pages/Categories/Keyboards";
import Mice from "./pages/Categories/Mice";
import All from "./pages/Categories/All";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <div className="App">
      <Router>
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setCategory={setCategory} />}
          />
          <Route
            path="/categories"
            element={
              <Categories
                category={category}
                setCategory={setCategory}
              />
            }
          >
            <Route
              path="/categories/all"
              Component={All}
            />
            <Route
              path="/categories/laptops"
              Component={Laptops}
            />
            <Route
              path="/categories/phones"
              Component={Phones}
            />
            <Route
              path="/categories/watches"
              Component={Watches}
            />
            <Route
              path="/categories/keyboards"
              Component={Keyboards}
            />
            <Route
              path="/categories/mice"
              Component={Mice}
            />
          </Route>

          {/* Products */}
          <Route
            path="/categories/laptops/AppleMacbookAirM2(13inch)"
            element={
              <ProductPage
                product={PRODUCTS.find(
                  (p) => p.name === "Apple Macbook Air M2 (13 inch)"
                )}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/categories/laptops/AppleMacbookProM2Pro(14inch)"
            element={
              <ProductPage
                product={PRODUCTS.find(
                  (p) => p.name === "Apple Macbook Pro M2 Pro (14 inch)"
                )}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/categories/phones/SamsungGalaxyS23Ultra"
            element={
              <ProductPage
                product={PRODUCTS.find(
                  (p) => p.name === "Samsung Galaxy S23 Ultra"
                )}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/categories/watches/HuaweiWatchGT3"
            element={
              <ProductPage
                product={PRODUCTS.find((p) => p.name === "Huawei Watch GT 3")}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/categories/keyboards/KeychronK3"
            element={
              <ProductPage
                product={PRODUCTS.find((p) => p.name === "Keychron K3")}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/categories/mice/LogitechMXMaster3S"
            element={
              <ProductPage
                product={PRODUCTS.find(
                  (p) => p.name === "Logitech MX Master 3S"
                )}
                setCategory={setCategory}
              />
            }
          />

          {/* Cart */}
          <Route
            path="/cart"
            Component={Cart}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
