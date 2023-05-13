import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentMonth } from '../utils/getCurrentMonth';
import { getYearsForMonth } from '../utils/getYearsForMonth';
import { randomFromArray } from '../utils/randomFromArray';
import { THEMES } from '../Model/themes';

export enum ACTIONS {
  SET_YEAR,
  SET_MONTH,
  SET_MONTH_AND_YEAR,
  SET_TRACK_INDEX,
  SET_THEME,
}

type AppState = {
  month?: string;
  year?: string;
  trackIndex?: number;
  theme?: THEMES;
};

const initialState: AppState = {
  month: getCurrentMonth(),
  year: randomFromArray(getYearsForMonth(getCurrentMonth())),
  trackIndex: 0,
  theme: THEMES.KMRT,
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

/**
 * @function load
 * @description Loads Data from Local Storage
 * @author Alexander Burdiss
 * @since 12/11/20
 * @version 1.0.2
 * @param {string} type Type of data to load.
 * @returns {JSON|null} The stored value or null, depending on if the data is
 * successfully retrieved.
 */
export async function load() {
  try {
    const jsonValue = await AsyncStorage.getItem('preferences');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}

/**
 * @function save
 * @description Stores Data in Local Storage
 * @author Alexander Burdiss
 * @since 12/11/20
 * @version 1.0.1
 * @param {Object} data Data to be stored in local storage
 */
export async function save(data: Object) {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('preferences', jsonValue);
  } catch (e) {
    console.log(e);
  }
}

/**
 * @function appReducer
 * @description Handles the logic for app-wide state.
 * Created 1/8/23
 * @param {AppState} state The current state, provided from the React
 * useReducer hook
 * @param {Object} action An object holding the "type" of action to be
 * performed, and data related to that action
 * @returns {AppState} An object with the updated app state, to be stored in
 * the React reducer
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
function appReducer(
  state: AppState,
  action: {
    type: ACTIONS;
    month?: string;
    year?: string;
    trackIndex?: number;
    theme?: THEMES;
  },
): AppState {
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
    case ACTIONS.SET_THEME:
      if (action.theme) {
        save({ theme: action.theme });
      }
      return {
        ...state,
        theme: action.theme,
      };
    default:
      throw new Error(`Unknown Action: ${action.type}`);
  }
}

/**
 * @function AppProvider
 * @description Provides the main app reducer to the application.
 * Created January 8, 2023
 * @param {Object} props JSX props passed to this React component
 * @param {JSX.Element} props.children The components to provide context to
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(function loadSettingsFromLocalStorage() {
    load().then((data) => {
      if (data !== null) {
        dispatch({ type: ACTIONS.SET_THEME, theme: data.theme });
      } else {
        dispatch({ type: ACTIONS.SET_THEME, theme: THEMES.KMRT });
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
};
