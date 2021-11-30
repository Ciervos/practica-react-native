import { ENEMIES } from '../../data/enemies';

const initialState = {
  enemies: ENEMIES,
}

const EnemiesReducer = (state = initialState, action) => {
  return state;
}

export default EnemiesReducer;