//actions types
export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

//main actions
export const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

export const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};
