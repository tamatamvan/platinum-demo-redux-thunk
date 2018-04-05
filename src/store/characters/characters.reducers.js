import { LOAD_CHARAS } from './characters.actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case LOAD_CHARAS:
      return state;
    default:
      return state;
  }
}