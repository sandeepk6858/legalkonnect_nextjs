// /context/SessionContext.js
'use client'
import React, { createContext, useContext } from 'react';

// Create a context with an initial value of null
const SessionContext = createContext(null);

// Custom hook to access the session context
export const useSession = () => useContext(SessionContext);

// Provider component to wrap around the component tree
export const SessionProvider = ({ session, children }) => {

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

