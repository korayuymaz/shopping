import React from "react";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
