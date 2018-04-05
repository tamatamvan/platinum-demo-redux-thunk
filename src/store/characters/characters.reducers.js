import { 
  LOAD_CHARAS_SUCCESS,
  LOAD_CHARAS_ERROR,
  LOAD_CHARAS_LOADING 
} from './characters.actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case LOAD_CHARAS_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        loading: false,
      };
    case LOAD_CHARAS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_CHARAS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state;
  }
}

export default reducers;