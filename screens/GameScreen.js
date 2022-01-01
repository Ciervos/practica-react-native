
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../constants/colors';

const GameScreen = props => {
  const dispatch = useDispatch();
  const mobs = useSelector(state => state.enemies.enemies);

  useEffect(() => {
    console.log(mobs)
    console.log("prueba",mobs[0])
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.guide}> Lograste entrar a la pantalla de juego :D!</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      guide:{
        fontFamily: 'PressStart2P',
        
       },
  
});

export default GameScreen;