import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup': {
      return {
        ...state,
        token: action.payload.token,
        errorMessage: '',
      };
    }
    case 'add_error': {
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    }
    default:
      return state;
  }
};

const signup = dispatch => async (email, password) => {
  try {
    const { data } = await trackerApi.post('/signup', {
      email,
      password,
    });
    await AsyncStorage.setItem('token', data.token);
    dispatch({
      type: 'signup',
      payload: { token: data.token },
    });
    // navigate to main flow
    navigate('TrackListScreen');
  } catch (e) {
    console.log('ERROR: ', e.response.data);
    dispatch({ type: 'add_error', payload: { error: e.message } });
  }
};

const signin = dispatch => {
  return (email, password) => {};
};

const signout = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer, // reducer
  { signin, signout, signup }, // actions
  { token: '', errorMessage: '' } // initial state
);
