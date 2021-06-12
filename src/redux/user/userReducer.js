import { GET_USER_FAILED, GET_USER_SUCCESS } from '../types';

const initialSate = {
  usersInfo: {},
  error: null,
};

const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { ...state, usersInfo: action.payload, error: null };
    case GET_USER_FAILED:
      return { ...state, usersInfo: {}, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
