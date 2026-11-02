import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalItems, totalPrice, removeFromCart } = useCart();

  const navigate = useNavigate();

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  // Empty cart check
  if (cart.length === 0) {
    return (
      <div className="container cart-container text-center">
        <h2>No items to checkout</h2>
        <p className="text-muted">Please add products to your cart first.</p>
        <Link to="/" className="btn-shop">
          Continue Shopping
        </Link>
      </div>
    );
  }

  //place order
  const handlePlaceOrder = () => {
    cart.forEach((item) => removeFromCart(item.id));
    navigate("/order-success");
  };

  return (
    <div className="container cart-container">
      <h1 className="mb-4">Checkout</h1>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="order-summary">
            <h4>Order Items</h4>

            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-3"
              >
                <div>
                  <h6>{item.name}</h6>
                  <small className="text-muted">Quantity:{item.quantity}</small>
                </div>

                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="order-summary">
            <h4>Order Summary</h4>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Total Amount</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>
            <hr />
            <button className="checkout-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
