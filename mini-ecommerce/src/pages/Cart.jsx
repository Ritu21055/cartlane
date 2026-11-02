import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="container cart-container text-center">
        <h2>Your Cart is Empty</h2>

        <p className="text-muted">Looks like you haven't added anything yet.</p>

        <Link to="/" className="btn-shop">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-container">
      <h1 className="mb-4">Your Shopping Cart</h1>

      <div className="row g-4">
        {/* Cart Products */}
        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-image" />

              <div className="cart-item-info">
                <span className="product-category">{item.category}</span>

                <h5>{item.name}</h5>

                <p className="product-price">{formatPrice(item.price)}</p>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>−</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <div className="cart-item-total">
                {formatPrice(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="order-summary">
            <h4>Order Summary</h4>

            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <hr />

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
