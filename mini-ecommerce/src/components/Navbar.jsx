import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingBag } from "react-icons/fa";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container py-2">
        {/* Brand Name */}
        <Link className="navbar-brand fw-bold" to="/">
          CARTLANE<span>.</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#products">
                Shop
              </Link>
            </li>
          </ul>

          {/* Cart Link */}
          <Link to="/cart" className="cart-link">
            <FaShoppingBag />
            Cart <span>{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
