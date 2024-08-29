import { useContext } from 'react';
import { LoadingContext } from '@/contexts/LoadingContext';

const LoadingIndicator = () => {
  const { isLoading } = useContext(LoadingContext);

  if (!isLoading) return null;

  return <div className="fixed top-0 left-0 w-full h-1 bg-blue-500" />;
};

export default LoadingIndicator;
