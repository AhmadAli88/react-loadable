// 3. Preloading Components
import Loadable from 'react-loadable';
import LoadingComponent from './LoadingComponent';

const PreloadableComponent = Loadable({
    loader: () => import('./DataGrid'),
    loading: LoadingComponent,
  });
  
  // Preload the component when user hovers over a button
  const PreloadButton = () => (
    <button
      onMouseOver={() => PreloadableComponent.preload()}
      onClick={() => {/* handle click */}}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Show Data Grid
    </button>
  );
export default PreloadButton;  