import { useState, useEffect } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Simulate product loading
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (!Array.isArray(products)) {
          throw new Error("Invalid product data");
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Unable to load products. Please try again.");
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Loading State
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted mt-3">Loading products...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="container py-5 text-center">
        <h4>Something went wrong!</h4>
        <p className="text-muted">{error}</p>

        <button className="btn-shop" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Cartlane Hero Section */}
      <section className="cartlane-hero mb-5">
        <div className="hero-content">
          <span className="hero-label">WELCOME TO CARTLANE</span>

          <h1>
            Good finds.
            <br />
            Great choices.
          </h1>

          <p className="hero-description">
            Everything you love, all in one place. From everyday essentials to
            things you didn't know you needed.
          </p>

          <a href="#products" className="hero-link">
            EXPLORE THE COLLECTION →
          </a>
        </div>

        <div className="hero-side-text">
          <span>01 — 04</span>
          <p>Find your next favourite.</p>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="category-section mb-5">
        <div className="mb-3">
          <span className="category-heading-label">EXPLORE CARTLANE</span>

          <h3 className="category-heading">Shop by Category</h3>
        </div>

        <div className="category-navigation">
          {/* All Products Button */}
          <button
            className={`category-chip ${
              selectedCategory === "All" ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory("All");
              setSearch("");
            }}
          >
            All Products <span>→</span>
          </button>

          {/* Category Buttons */}
          {categories.slice(1).map((category) => (
            <button
              key={category}
              className={`category-chip ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setSearch("");
              }}
            >
              {category}
              <span>→</span>
            </button>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="mb-4">
        <div className="mb-3">
          <span className="category-heading-label">
            THE CARTLANE COLLECTION
          </span>

          <h3 className="category-heading">Find something you'll love.</h3>
        </div>

        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Product Count */}
      <div className="mb-3">
        <p className="text-muted">Showing {filteredProducts.length} products</p>
      </div>

      {/* Product Listing */}
      <div className="row g-4" id="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4>No products found</h4>

            <p className="text-muted">Try another search or category.</p>

            <button
              className="btn-shop"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
