import { CHOOSE_AVATAR, LOAD_AVATAR, CHANGE_STATS, LOAD_STATS } from "../actions/character.actions";
import defaultimg from '../../imgs/personajes/background/45.png';
import {API_URL} from '../../data/database';


const initialState = {
  avatar: null,
  collection: [],
  win: 0,
  lose: 0,
  
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
            
        };
      case CHANGE_STATS:
        
        return{
         ...state, 
         win: action.win,
         lose: action.lose,
        };  
      case LOAD_STATS:
        return{
         ...state,
         win: action.payload.win,
         lose: action.payload.lose, 
        }  
    default:
      return state;
  }
}

export default CharacterReducer;

