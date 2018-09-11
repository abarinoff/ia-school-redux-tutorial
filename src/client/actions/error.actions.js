export const ErrorActionTypes = {
  SET_ERROR: '[ERROR] Set',
  RESET_ERROR: '[ERROR] Reset'
};

export const setError = message => ({
  type: ErrorActionTypes.SET_ERROR,
  payload: {message}
});

export const resetError = () => ({
  type: ErrorActionTypes.RESET_ERROR,
  payload: {}
});

