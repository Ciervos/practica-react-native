import { createStore, combineReducers } from 'redux';

import EnemyReducer from './reducers/enemies.reducer';
import ItemsReducer from './reducers/items.reducer';
import CharacterReducer from './reducers/character.reducer';

const RootReducer = combineReducers({
  enemies: EnemyReducer,
  items: ItemsReducer,
  character: CharacterReducer,
});

export default createStore(RootReducer);