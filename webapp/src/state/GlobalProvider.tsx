import React, { createContext, useReducer } from 'react';
import {appState} from '../entities/appState';
import AppReducer from './AppReducer';

interface Props {
  children: React.ReactNode;
}

const initialState: appState = {
  hiddenColumns: [],
  filters: {},
  toggleColumn: () => {},
  setFilter: () => {},
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children } : Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
   const toggleColumn = React.useCallback((column) => {
     dispatch({
       type: 'TOGGLE_COLUMN',
       payload: column,
     });
   }, [dispatch]);

   const setFilter = React.useCallback((key: string, newValue: string | boolean | number) => {
    dispatch({
      type: 'SET_FILTER',
      payload: {
	key,
	newValue
      },
    });
   }, []);

   const value = React.useMemo(() => ({
     hiddenColumns: state.hiddenColumns,
     filters: state.filters,
     toggleColumn,
     setFilter,
   }), [state, toggleColumn, setFilter])

   return(
     <GlobalContext.Provider
       value={value}
      >{children} 
    </GlobalContext.Provider>
   )
}
