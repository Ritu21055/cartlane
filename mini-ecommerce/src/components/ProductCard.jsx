import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card product-card h-100">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.name}
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <span className="product-category">{product.category}</span>

        <h5 className="card-title mt-2">{product.name}</h5>

        <div className="product-info-row">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="product-rating">★ {product.rating}</span>
        </div>
      </div>

      <div className="card-actions">
        <Link to={`/product/${product.id}`} className="view-details-btn">
          View Details →
        </Link>

        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          + Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
