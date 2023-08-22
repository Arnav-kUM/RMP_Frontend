import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ProfsearchValue, setProfSearchValue] = useState('');
  const[displayProfId,setDisplayProfId] = useState('');

  const updateProfSearchValue = (value) => {
    setProfSearchValue(value);
  };
  const updateDisplayProfId = (value) => {
    setDisplayProfId(value);
  }

  return (
    <AppContext.Provider value={{ ProfsearchValue, updateProfSearchValue,displayProfId, updateDisplayProfId }}>
      {children}
    </AppContext.Provider>
  );
};
