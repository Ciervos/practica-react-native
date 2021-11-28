import React,{useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import colors from '../constants/colors';

const CollectionScreen = () => {


  return (
    <View style={styles.container}>
     <Text>Pantalla de Colección</Text>
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

export default CollectionScreen;