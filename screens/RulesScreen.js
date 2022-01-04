
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import colors from '../constants/colors';

const RulesScreen = () => {


  return (
    <View style={styles.container}>
     <Text>Reglas:</Text>
     <Text>- Te enfrentas a 3 monstruos </Text>
     <Text>- Cada monstruo tiene sus débilidades</Text>
     <Text>- Si usas el item correcto puedes avanzar sin consecuencias</Text>
     <Text>- Si te equivocas, recibes daño </Text>
     <Text>- Item que uses, item que no puedes usar en la misma partida</Text>
     <Text>- Si pierdes toda la vida, pierdes el juego.</Text>

     
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