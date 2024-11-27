/*eslint-disable*/
import React, { useState, useEffect, Suspense } from 'react';
import LoadingComponent from './components/LoadingComponent';
import Posts from './components/Posts';
import { QueryClient, QueryClientProvider } from 'react-query';
import MySkeleton from './components/SkeletonLoader';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Dynamically import HeavyComponent
  const HeavyComponent = React.lazy(() =>
    import('./components/HeavyComponent')
  );
  // Lazy load multiple components
  const Header = React.lazy(() => import('./components/Header'));
  const Content = React.lazy(() => import('./components/Content'));
  const Footer = React.lazy(() => import('./components/Footer'));
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  // Create a client instance
  const queryClient = new QueryClient();
  return (
    <div className='App'>
      {/* {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className='content'>
          <h1>Welcome to My Application</h1>
          <p>The content has successfully loaded!</p>
        </div>
      )} */}
      <div className=''>
        <h1>React.lazy Example</h1>
        <Suspense fallback={<LoadingComponent />}>
          <HeavyComponent />
          <Header />
          <Content />
          <Footer />
        </Suspense>
        <h1>Suspense with React Query</h1>
        <QueryClientProvider client={queryClient}>
          <h1>My App</h1>
          <Posts />
        </QueryClientProvider>
        <div>
          <MySkeleton />
        </div>
      </div>
    </div>
  );
};

export default App;
