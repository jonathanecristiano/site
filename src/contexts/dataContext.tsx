'use client'
import React, { createContext, useContext, useState, useCallback } from 'react';

interface EventData {
  id: string;
  day: string;
  month: string;
  location: string;
  city: string;
  linkbuy?: string;
}

interface DataContextType {
  events: EventData[];
  addEvent: (event: Omit<EventData, 'id'>) => void;
  deleteEvent: (id: string) => void;
  refreshData: () => void;
  onDataChange: (callback: () => void) => void;
  triggerRefresh: () => void;
}

// Dados mockados de agenda
const MOCK_EVENTS_DATA: EventData[] = [
  {
    id: '1',
    day: '15',
    month: 'Janeiro',
    location: 'Centro de Convenções',
    city: 'São Paulo',
    linkbuy: 'https://example.com/buy/sp'
  },
  {
    id: '2',
    day: '22',
    month: 'Janeiro',
    location: 'Arena Events',
    city: 'Rio de Janeiro',
    linkbuy: 'https://example.com/buy/rj'
  },
  {
    id: '3',
    day: '30',
    month: 'Janeiro',
    location: 'Expo Center',
    city: 'Belo Horizonte',
    linkbuy: 'https://example.com/buy/bh'
  }
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<EventData[]>(MOCK_EVENTS_DATA);
  const [refreshCallbacks, setRefreshCallbacks] = useState<(() => void)[]>([]);

  const addEvent = useCallback((eventData: Omit<EventData, 'id'>) => {
    const newEvent: EventData = {
      ...eventData,
      id: Date.now().toString()
    };
    setEvents(prev => [...prev, newEvent]);
  }, []);

  const deleteEvent = useCallback((id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  }, []);

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
    <DataContext.Provider value={{ events, addEvent, deleteEvent, refreshData, onDataChange, triggerRefresh }}>
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

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};