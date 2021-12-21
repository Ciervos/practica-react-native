export const CHOOSE_AVATAR = 'CHOOSE_AVATAR';
export const LOAD_AVATAR = 'LOAD_AVATAR';
import {insertPlayerData , fetchPlayerData, updatePlayerData} from '../../db';
import * as FileSystem from 'expo-file-system';


export const chooseAvatar = (newavatar) => {
  return async dispatch => {


      const fileName = newavatar.split('/').pop();
      const Path = FileSystem.documentDirectory + fileName;

      try {
          FileSystem.moveAsync({
              from: newavatar,
              to: Path,
          });

        const result = await insertPlayerData(
              Path
          );
         
        const prueba = await updatePlayerData(
             Path
        );  
         
        

          dispatch({
              type: CHOOSE_AVATAR,
              payload: {
                  id: result.insertId,
                  avatar: Path,
              },
          });
      } catch(err) {
          console.log(err.message);
          throw err;
      }
  };
}

export const loadAvatar = () => {
  return async dispatch => {
      try {
          const result = await fetchPlayerData()
          console.log("result",result)
          console.log("result2",result.rows._array[0].avatar)
          dispatch({
              type: LOAD_AVATAR,
              avatar: result.rows._array[0].avatar
          })
      } catch(err) { 
          throw err;
      }
  }
}
