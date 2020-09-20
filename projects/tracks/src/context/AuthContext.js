import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const SIGNIN = 'signin';
const SIGNOUT = 'signout';
const ADD_ERROR = 'add_error';
const CLEAR_ERROR_MESSAGE = 'clear_error_message';

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGNIN: {
      return {
        ...state,
        token: action.payload.token,
        errorMessage: '',
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        token: '',
        errorMessage: '',
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    }
    case CLEAR_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: '',
      };
    }
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: SIGNIN, payload: { token } });
    navigate('TrackListScreen');
  } else {
    navigate('loginFlow');
  }
};

const signup = dispatch => async (email, password) => {
  try {
    const { data } = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', data.token);
    dispatch({ type: SIGNIN, payload: { token: data.token } });
    // navigate to main flow
    navigate('TrackListScreen');
  } catch (e) {
    console.log('ERROR: ', e.response.data);
    dispatch({ type: ADD_ERROR, payload: { errorMessage: e.message } });
  }
};

const signin = dispatch => async (email, password) => {
  try {
    const { data } = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', data.token);
    dispatch({ type: SIGNIN, payload: { token: data.token } });
    // navigate to main flow
    navigate('TrackListScreen');
  } catch (e) {
    console.log('ERROR: ', e.response.data);
    dispatch({ type: ADD_ERROR, payload: { errorMessage: e.message } });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGNOUT });
  navigate('loginFlow');
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};

export const { Provider, Context } = createDataContext(
  authReducer, // reducer
  { signin, signout, signup, clearErrorMessage, tryLocalSignin }, // actions
  { token: '', errorMessage: '' } // initial state
);
