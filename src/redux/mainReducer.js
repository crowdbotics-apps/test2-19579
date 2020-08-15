import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp01BlueprintReducer from '../features/SignUp01Blueprint/redux/reducers'
import SignIn05BlueprintReducer from '../features/SignIn05Blueprint/redux/reducers'
import Dashboard21990728Reducer from '../features/Dashboard21990728/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp01Blueprint: SignUp01BlueprintReducer,
SignIn05Blueprint: SignIn05BlueprintReducer,
Dashboard21990728: Dashboard21990728Reducer,

});