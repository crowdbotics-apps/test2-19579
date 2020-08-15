import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn05BlueprintReducer from '../features/SignIn05Blueprint/redux/reducers'
import Dashboard21990728Reducer from '../features/Dashboard21990728/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn05Blueprint: SignIn05BlueprintReducer,
Dashboard21990728: Dashboard21990728Reducer,

});