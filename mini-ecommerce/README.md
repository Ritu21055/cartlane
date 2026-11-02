Cartlane
A clean, responsive mini e-commerce storefront built with React and
Vite. Cartlane lets users browse a small product collection, search
and filter products, view product details, and manage a shopping cart.
This project uses local JSON data for products. It does not require a
backend or external product API.

Features

- Product listing: Displays products from a local JSON file.
- Search: Search products by name.
- Category navigation: Filter products using category buttons.
- Product details: Open an individual product page using React
  Router.
- Shopping cart: Add products, remove products, and increase or
  decrease quantities.
- Cart summary: Shows total item quantity and total price.
- Persistent cart: Saves cart data in the browser's LocalStorage,
  so the cart remains after a page refresh.
- UI states: Includes simulated loading, product-data error
  handling, and an empty search-results state.
- Responsive layout: Uses Bootstrap and custom CSS for different
  screen sizes.
- Checkout flow: Includes checkout and order-success pages for the
  assignment's front-end flow.
  Tech Stack
  Technology Purpose
  React Component-based user interface
  Vite Development server and build tool
  JavaScript Application logic
  Bootstrap 5 Responsive layout and utility classes
  Custom CSS Cartlane visual styling
  React Router DOM Client-side page navigation
  Context API Shared shopping-cart state
  LocalStorage Persist cart data in the browser
  JSON Local product data
  Getting Started
  Prerequisites
  Make sure you have the following installed:
- Node.js (LTS version recommended)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

1. Clone the repository
   git clone <your-github-repository-url>
   Or download the repository and extract it.
2. Open the project folder
   cd mini-ecommerce
   Use the folder name that contains your package.json.
3. Install dependencies
   npm install
   If the project dependencies have not already been installed, make sure
   the project includes React, React DOM, Vite, React Router DOM, and
   Bootstrap.
4. Start the development server
   npm run dev
   Open the local URL printed in your terminal (usually
   http://localhost:5173).
5. Create a production build
   npm run build
   To preview the production build locally:
   npm run preview
   Project Structure
   The main source files are organized as follows:
   mini-ecommerce/
   ├── public/
   ├── src/
   │ ├── components/
   │ │ ├── Navbar.jsx
   │ │ └── ProductCard.jsx
   │ ├── context/
   │ │ └── CartContext.jsx
   │ ├── data/
   │ │ └── products.json
   │ ├── pages/
   │ │ ├── Home.jsx
   │ │ ├── ProductDetails.jsx
   │ │ ├── Cart.jsx
   │ │ ├── Checkout.jsx
   │ │ └── OrderSuccess.jsx
   │ ├── App.jsx
   │ ├── index.css
   │ └── main.jsx
   ├── index.html
   ├── package.json
   └── README.md
   Application Routes
   Route Page Description
   / Home Product collection, search, and category navigation
   /product/:id Product Details Details for the selected product
   /cart Cart Cart items, quantity controls, and order summary
   /checkout Checkout Checkout page
   /order-success Order Success Order confirmation page
   How the Cart Works
   The cart state is managed centrally using React Context API.
6. When a user adds a product, the application checks whether that
   product is already in the cart.
7. If it exists, its quantity is increased.
8. If it does not exist, it is added with an initial quantity of 1.
9. Users can increase or decrease quantities and remove products.
10. The application calculates the total item quantity and total price
    from the cart state.
11. A useEffect saves cart changes to LocalStorage.
12. When the application loads, the cart is initialized from the saved
    LocalStorage data.
    Product Data
    Products are stored in:
    src/data/products.json
    The product list is local sample data. To add or update products, edit
    this JSON file while keeping the product object structure consistent
    with the fields used by the components.

Example product structure:
{
"id": 1,
"name": "Wireless Headphones",
"price": 1999,
"category": "Electronics",
"rating": 4.5,
"image": "https://example.com/product-image.jpg",
"description": "A sample product description."
}
Deployment
The project can be deployed to platforms such as Vercel or
Netlify.

For a Vite project, use:

- Build command: npm run build
- Output directory: dist
  Follow the hosting platform's instructions to import your GitHub
  repository and deploy it. If you use React Router, configure the hosting
  platform to serve index.html for application routes so direct visits
  to product, cart, and checkout URLs work correctly.
  Current Scope
- Product information is loaded from a local JSON file.
- No backend, database, payment gateway, or real order-processing
  service is connected.
- The checkout and order-success pages are part of the front-end flow;
  they should not be treated as real payment or order confirmation.
- Product loading is simulated on the client side.
  Author
  Ritu Chittimalle
- GitHub: Ritu21055
- LinkedIn: Ritu
  Chittimalle
  Built with React, care, and a focus on a simple shopping experience.
