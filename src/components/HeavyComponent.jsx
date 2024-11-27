/*eslint-disable*/
import React from 'react';

const HeavyComponent = () => {
  return (
    <div className="heavy-component">
      <h2>Heavy Component Loaded Successfully!</h2>
      <p>
        This component has been dynamically loaded using <b>react-loadable</b>. Dynamic loading helps in optimizing performance by reducing the initial bundle size.
      </p>
    </div>
  );
};

export default HeavyComponent;
