import React from 'react';
import { AppContext } from '../src/Contexts/AppContext';

export default function MockContext({ children }: any) {
  let state = {
    month: 'January',
  };
  let dispatch = jest.fn();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
