import { createStore, combineReducers } from 'redux';
import charasReducers from './characters/characters.reducers';

const reducers = combineReducers({
  charas: charasReducers,
});

const store = createStore(reducers);

export default store;