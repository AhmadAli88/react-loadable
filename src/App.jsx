/* eslint-disable */
import React, { useState, useEffect, Suspense } from 'react';
import LoadingComponent from './components/LoadingComponent';
import Posts from './components/Posts';
import { QueryClient, QueryClientProvider } from 'react-query';
import MySkeleton from './components/SkeletonLoader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Dynamically import HeavyComponent
const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));
// Lazy load multiple components
const Header = React.lazy(() => import('./components/Header'));
const Content = React.lazy(() => import('./components/Content'));
const Footer = React.lazy(() => import('./components/Footer'));

// Lazy-load pages for routes
const HomePage = React.lazy(() => import('./components/HomePage'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Create a client instance for React Query
  const queryClient = new QueryClient();

  return (
    <div className='App'>
      <Router>
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

        {/* Lazy-load routes with Suspense fallback for each page */}
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<div>Loading Home Page...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<div>Loading About Page...</div>}>
                <AboutPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
