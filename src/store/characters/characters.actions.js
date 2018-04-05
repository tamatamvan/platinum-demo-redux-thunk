import { 
  LOAD_CHARAS_SUCCESS, 
  LOAD_CHARAS_ERROR,
  LOAD_CHARAS_LOADING,
} from './characters.actionTypes';
import axios from 'axios';

export const loadCharas = (payload) => {
  // https://github.com/gaearon/redux-thunk#motivation
  return dispatch => {
    // here async process
    dispatch(loadCharasLoading())
    axios.get('https://swapi.co/api/people/')
    .then(({data}) => dispatch(loadCharasSuccess(data)))
    .catch(err => dispatch(loadCharasErr()));
  }
};

const loadCharasSuccess = (payload) => ({
  type: LOAD_CHARAS_SUCCESS,
  payload: payload,
})

const loadCharasLoading = (payload) => ({
  type: LOAD_CHARAS_LOADING,
})

const loadCharasErr = (payload) => ({
  type: LOAD_CHARAS_ERROR,
})
