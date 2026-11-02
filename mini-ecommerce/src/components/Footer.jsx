import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand Information */}
          <div className="col-lg-5 col-md-6">
            <Link to="/" className="footer-brand">
              CARTLANE<span>.</span>
            </Link>

            <p className="footer-description">
              Good finds. Great choices. Your everyday destination for fashion,
              technology, accessories and more.
            </p>
          </div>

          {/* Shopping Categories */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">SHOP</h6>

            <ul className="footer-links">
              <li>
                <Link to="/#products">Electronics</Link>
              </li>
              <li>
                <Link to="/#products">Fashion</Link>
              </li>
              <li>
                <Link to="/#products">Accessories</Link>
              </li>
              <li>
                <Link to="/#products">Home</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">QUICK LINKS</h6>

            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#products">Shop</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CARTLANE. All rights reserved.</p>
          <p>Good finds. Great choices.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
