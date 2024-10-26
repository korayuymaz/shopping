import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
