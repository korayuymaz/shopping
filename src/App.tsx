import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import ShoppingCard from "./pages/shopping-cart";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/:gender" element={<Products />} />
        <Route path="/cart" element={<ShoppingCard />} />
      </Routes>
    </div>
  );
}

export default App;
