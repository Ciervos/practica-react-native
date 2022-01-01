
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import colors from '../constants/colors';

const RulesScreen = () => {


  return (
    <View style={styles.container}>
     <Text>Reglas:
       - Te enfrentas a 3 monstruos
       - Cada monstruo tiene sus débilidades
       - Si usas el item correcto puedes avanzar sin consecuencias
       - Si te equivocas, recibes daño 
       - Item que uses, item que no puedes usar en la misma partida
       - Si pierdes toda la vida, pierdes el juego.

     </Text>
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

  
});

export default RulesScreen;