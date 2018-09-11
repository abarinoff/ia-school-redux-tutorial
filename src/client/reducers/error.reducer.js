import {ErrorActionTypes} from '../actions';

const defaultState = null;

const ErrorReducer = (state = defaultState, action) => {
  switch (action.type) {

    case ErrorActionTypes.SET_ERROR:
      return action.payload.message;

    case ErrorActionTypes.RESET_ERROR:
      return null;

    default:
      return state;
  }
};

export default ErrorReducer;