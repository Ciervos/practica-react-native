import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('playerdata.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS playerdata (
            id INTEGER PRIMARY KEY NOT NULL,
            avatar TEXT NOT NULL
            
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        );
      });
    });
  
    return promise;
  }
  
  export const insertPlayerData = (
    avatar
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT OR REPLACE INTO  playerdata (avatar)
            VALUES (?)`,
          [avatar],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }

  export const updatePlayerData = (
    avatar
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE playerdata
          SET avatar = ?`,
          [avatar],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }

  export const fetchPlayerData = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT avatar FROM playerdata`,
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }