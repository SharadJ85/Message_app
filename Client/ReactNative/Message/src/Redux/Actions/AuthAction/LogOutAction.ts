//actions types
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//main actions
export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutError = (error: any) => {
  return {
    type: LOGOUT_FAILURE,
    payload: error,
  };
};
