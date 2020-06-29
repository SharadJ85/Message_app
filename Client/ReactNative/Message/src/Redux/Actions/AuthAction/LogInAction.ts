//actions types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//main actions
export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const receiveLogin = (baseData: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: baseData,
  };
};

export const loginError = (error: any) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
