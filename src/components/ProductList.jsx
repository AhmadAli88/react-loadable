import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import styles for the skeleton

const ProductList = () => {
  // State to store product data and loading state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate an API call to fetch products
  useEffect(() => {
    // Simulating loading with a delay (e.g., fetching products from an API)
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Product 1', price: '$20' },
        { id: 2, name: 'Product 2', price: '$30' },
        { id: 3, name: 'Product 3', price: '$40' },
      ]);
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-items">
        {loading
          ? // Display skeleton loaders when loading
            Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="product-item">
                  <Skeleton height={30} width="60%" />
                  <Skeleton height={20} width="40%" />
                  <Skeleton height={50} />
                </div>
              ))
          : // Display actual product data
            products.map((product) => (
              <div key={product.id} className="product-item">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductList;
