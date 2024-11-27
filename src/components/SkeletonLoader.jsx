import React, { Suspense } from 'react';

// Custom Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="skeleton-loader">
    <div className="skeleton-item" style={{ height: '20px', width: '200px' }}></div>
    <div className="skeleton-item" style={{ height: '15px', width: '150px' }}></div>
  </div>
);

// Lazy-load a component
const ProductList = React.lazy(() => import('../components/ProductList'));

const MySkeleton = () => (
  <div>
    <h1>Suspense with Skeleton Loader</h1>
    <Suspense fallback={<SkeletonLoader />}>
      <ProductList />
    </Suspense>
  </div>
);

export default MySkeleton;
