import { GET_USER_FAILED, GET_USER_SUCCESS } from '../types';
import axios from 'axios';

export const getUserInfo = () => async (dispatch) => {
  try {
    const dataResponse = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: GET_USER_SUCCESS,
      payload: dataResponse.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILED,
      payload: error.message,
    });
  }
};
