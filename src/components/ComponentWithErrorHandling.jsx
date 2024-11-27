import Loadable from 'react-loadable';
import LoadingComponent from './LoadingComponent';
const ComponentWithErrorHandling = Loadable({
  loader: () => import('./ComplexDataVisualization'),
  loading: ({ error, retry, pastDelay }) => {
    if (error) {
      return (
        <div className='p-4 border border-red-500 rounded'>
          <p>Error loading component! {error.message}</p>
          <button
            onClick={retry}
            className='mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >
            Retry
          </button>
        </div>
      );
    } else if (pastDelay) {
      return <LoadingComponent />;
    }
    return null;
  },
  delay: 300,
});

export default ComponentWithErrorHandling;
