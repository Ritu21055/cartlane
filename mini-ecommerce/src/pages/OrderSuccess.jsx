import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container cart-container text-center">
      <div className="order-success">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully</h1>
        <p className="text-muted mt-3">
          Thank you for shopping with CARTLANE. Your order has been confirmed.
        </p>
        <Link to="/" className="btn-shop mt-4">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
