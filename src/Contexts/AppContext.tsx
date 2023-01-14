import React, { createContext, useReducer } from 'react';
import { getCurrentMonth } from '../utils/getCurrentMonth';
import { getYearsForMonth } from '../utils/getYearsForMonth';
import { randomFromArray } from '../utils/randomFromArray';

const ACTIONS = {
  SET_YEAR: 'SET_YEAR',
  SET_MONTH: 'SET_MONTH',
  SET_MONTH_AND_YEAR: 'SET_MONTH_AND_YEAR',
  SET_TRACK_INDEX: 'SET_TRACK_INDEX',
};

export const AppContext = createContext();
AppContext.actions = ACTIONS;

const appReducer = function (state, action) {
  switch (action.type) {
    case ACTIONS.SET_MONTH:
      return { ...state, month: action.month, trackIndex: 0 };
    case ACTIONS.SET_YEAR:
      return { ...state, year: action.year, trackIndex: 0 };
    case ACTIONS.SET_MONTH_AND_YEAR:
      return {
        ...state,
        month: action.month,
        year: action.year,
        trackIndex: 0,
      };
    case ACTIONS.SET_TRACK_INDEX:
      return {
        ...state,
        trackIndex: action.trackIndex,
      };
    default:
      throw new Error(`Unknown Action: ${action.type}`);
  }
};

export function PreferencesProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    month: getCurrentMonth(),
    year: randomFromArray(getYearsForMonth(getCurrentMonth())),
    trackIndex: 0,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
