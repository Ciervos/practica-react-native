
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import colors from '../constants/colors';

const RulesScreen = () => {


  return (
    <View style={styles.container}>
     <Text>Pantalla de Reglas</Text>
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