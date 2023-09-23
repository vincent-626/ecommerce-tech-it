import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
          />
          <Route path="/categories" />
          <Route path="/categories/laptops" />
          <Route path="/categories/phones" />
          <Route path="/categories/watches" />
          <Route path="/categories/keyboards" />
          <Route path="/categories/mouses" />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
