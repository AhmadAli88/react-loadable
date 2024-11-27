/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import LoadingComponent from './components/LoadingComponent';
import BasicDynamicComponent from './components/BasicDynamicComponent';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className='App'>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className='content'>
          <h1>Welcome to My Application</h1>
          <p>The content has successfully loaded!</p>
        </div>
      )}
      <div>
        <h1>React Loadable Example</h1>
        <p>Below is a dynamically loaded component:</p>
        <BasicDynamicComponent />
      </div>
    </div>
  );
};

export default App;
