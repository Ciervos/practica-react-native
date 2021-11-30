
import { ITEMS } from '../../data/items';
import { SELECT_ITEM } from '../actions/items.actions';

const initialState = {
  items: ITEMS,
}

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        items: action.newinventory,
      };
    default:
      return state;
  }
}

export default ItemsReducer;