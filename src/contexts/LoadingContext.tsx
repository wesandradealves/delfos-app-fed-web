// contexts/LoadingContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export const LoadingContext = createContext<any>({
  isLoading: false,
  setLoading: () => {},
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
