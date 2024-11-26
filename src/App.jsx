import Loadable from 'react-loadable';
import Loading from './components/Loading';

// Create a loadable component using react-loadable
const LoadableComponent = Loadable({
  loader: () => import('./components/MyComponent'),
  loading: Loading, // The component to show while loading
});

const App = () => {
  return (
    <div>
      <h1>React Loadable Example</h1>
      <LoadableComponent />
    </div>
  );
};

export default App;
