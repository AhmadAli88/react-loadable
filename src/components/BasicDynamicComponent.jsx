import LoadingComponent from './LoadingComponent';

import Loadable from 'react-loadable';
// 1. Basic Component Loading
const BasicDynamicComponent = Loadable({
    loader: () => import('../components/HeavyComponent'),
    loading: LoadingComponent,
    delay: 300, // Only show loading component after 300ms
    timeout: 10000, // Show error after 10 seconds
  });
export default BasicDynamicComponent;