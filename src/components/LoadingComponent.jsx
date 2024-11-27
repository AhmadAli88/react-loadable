// Basic Loading Component
const LoadingComponent = () => (
  <div className='flex items-center justify-center p-4'>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
    <span className='ml-2'>Loading...</span>
  </div>
);
export default LoadingComponent;
