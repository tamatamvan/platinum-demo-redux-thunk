import { 
  createStore,
  combineReducers,
  applyMiddleware, 
} from 'redux';
import thunk from 'redux-thunk';

import charasReducers from './characters/characters.reducers';

const reducers = combineReducers({
  charas: charasReducers,
});

const store = createStore(
  reducers,/* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;