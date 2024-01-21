"use client";
// Provider.tsx
import React, { ReactNode }  from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Update the path accordingly

interface AppProviderProps {
    children: ReactNode;
  }
  
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
