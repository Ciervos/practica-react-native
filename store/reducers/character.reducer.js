import { CHOOSE_AVATAR, LOAD_AVATAR } from "../actions/character.actions";
import defaultimg from '../../imgs/personajes/background/45.png';


const initialState = {
  avatar: null,
  collection: [],
  
}

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_AVATAR:

      return {
        ...state,
        avatar: action.payload.avatar
      };
      case LOAD_AVATAR:
        return {
         ...state,
        avatar: action.avatar,
            
        }
    default:
      return state;
  }
}

export default CharacterReducer;

