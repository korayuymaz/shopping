import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import ShoppingCard from "./pages/shopping-cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCard />} />
      </Routes>
    </div>
  );
}

export default App;
