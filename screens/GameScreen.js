
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import colors from '../constants/colors';

const GameScreen = props => {


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