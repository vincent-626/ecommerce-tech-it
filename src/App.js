import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            Component={Home}
          />
          <Route
            path="/categories"
            Component={Categories}
          />
          <Route path="/categories/laptops" />
          <Route path="/categories/phones" />
          <Route path="/categories/watches" />
          <Route path="/categories/keyboards" />
          <Route path="/categories/mouses" />
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
