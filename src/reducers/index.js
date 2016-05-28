import { combineReducers } from 'redux';
import CardReducer from './reducer_card';

const rootReducer = combineReducers({
  cards: CardReducer
});

export default rootReducer;
