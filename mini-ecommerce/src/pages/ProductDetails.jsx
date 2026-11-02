import { useParams, Link } from "react-router-dom";

import products from "../data/products.json";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2>Product not found</h2>
        <p className="text-muted">
          The product you are looking for does not exist.
        </p>

        <Link to="/" className="btn-shop">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/" className="back-link">
        Back to Products
      </Link>

      <div className="row mt-4 g-5 align-items-center">
        {/* Product Image */}

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="details-image"
          />
        </div>

        {/* Product Information */}
        <div className="col-md-6">
          <span className="product-category">{product.category}</span>
          <h1 className="details-title mt-3">{product.name}</h1>
          <p className="details-rating"> ★ {product.rating} / 5</p>
          <h2 className="details-price">
            {" "}
            ₹{product.price.toLocaleString("en-IN")}
          </h2>
          <hr />
          <h5>Product Description</h5>
          <p className="details-description">{product.description}</p>
          <p className="availability">
            <span>●</span> Available
          </p>
          <button
            className="add-cart-btn details-cart-btn"
            onClick={() => {
              console.log("1. Button clicked");
              console.log("2. addToCart function:", addToCart);

              addToCart(product);

              console.log(
                "3. LocalStorage cart:",
                localStorage.getItem("cart"),
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
