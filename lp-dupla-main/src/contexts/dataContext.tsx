'use client'
import React, { createContext, useContext, useState, useCallback } from 'react';

interface DataContextType {
  refreshData: () => void;
  onDataChange: (callback: () => void) => void;
  triggerRefresh: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [refreshCallbacks, setRefreshCallbacks] = useState<(() => void)[]>([]);

  const onDataChange = useCallback((callback: () => void) => {
    setRefreshCallbacks(prev => [...prev, callback]);
  }, []);

  const triggerRefresh = useCallback(() => {
    refreshCallbacks.forEach(callback => callback());
  }, [refreshCallbacks]);

  const refreshData = useCallback(() => {
    triggerRefresh();
  }, [triggerRefresh]);

  return (
    <DataContext.Provider value={{ refreshData, onDataChange, triggerRefresh }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};