import { CHOOSE_AVATAR } from "../actions/character.actions";
import defaultimg from '../../imgs/personajes/background/45.png';


const initialState = {
  avatar: null,
}

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_AVATAR:
      return {
        ...state,
        avatar: action.newavatar,
      };
    default:
      return state;
  }
}

export default CharacterReducer;