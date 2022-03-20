import {appState} from "../entities/appState";

interface Action {
  type: string,
  payload: any
}

export default (state: appState, action: Action) => {
   switch(action.type) {
       case 'TOGGLE_COLUMN':
           return {
	    ...state,
	    hiddenColumns: state.hiddenColumns.includes(action.payload) ? state.hiddenColumns.filter(id => id !== action.payload) : [...state.hiddenColumns, action.payload],
           }
       case 'SET_FILTER':
           return {
	    ...state,
	    filters: {
	      ...state.filters,
	      [action.payload.key]: action.payload.newValue
	    }
           }
       default:
           return state;
   }
}
