import { combineReducers } from "redux";
import * as actions from '../actions'

export const initialState = {
    loading: false,
    hasErrors: false,
    parametros: [],
    redirect: null
    }
  
function parametroReducer(state = initialState, action) {
    switch (action.type) {
      case actions.LOADING:
        return { ...state, loading: true }
      case actions.LOADED_SUCCESS:
        return { ...state, ...action.payload, loading: false, hasErrors: false }
      case actions.LOADED_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }


const rootReducer = combineReducers({
    parametros: parametroReducer
})

export default rootReducer;