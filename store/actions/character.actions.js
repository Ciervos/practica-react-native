export const CHOOSE_AVATAR = 'CHOOSE_AVATAR';
export const LOAD_AVATAR = 'LOAD_AVATAR';
export const CHANGE_STATS = 'CHANGE_STATS';
export const LOAD_STATS = 'LOAD_STATS';
import {insertPlayerData , fetchPlayerData, updatePlayerData} from '../../db';
import {API_URL} from '../../data/database';
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
         
          dispatch({
              type: LOAD_AVATAR,
              avatar: result.rows._array[0].avatar
          })
      } catch(err) { 
          throw err;
      }
  }
}

export const changeStats = (match,total,nochange) => {
    return async dispatch => {
        try {
           if(match){
            const response = await fetch(`${API_URL}/playerstats.json`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  win: total, 
                  lose: nochange
                }),
              });
        
              const result = await response.json();
              

              dispatch({
                type: CHANGE_STATS,
                win: total,  
                lose: nochange, 
            })

           }else{
            const response = await fetch(`${API_URL}/playerstats.json`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  win: nochange,  
                  lose: total 
                }),
              });
        
              const result = await response.json();
              
              

              dispatch({
                type: CHANGE_STATS,
                win: nochange,  
                lose: total
            })
           } 
           
            
        } catch(err) { 
            throw err;
        }
    }
  }

  export const loadStats = () => {
    return async dispatch => {
        try {
    const response = await fetch(`${API_URL}/playerstats.json`, {
        
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      console.log(result)

      dispatch({
        type: LOAD_STATS,
        payload: result,
    })

    } catch(err) { 
        throw err;
    }
    }  
  }