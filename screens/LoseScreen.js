import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import colors from '../constants/colors';

const LoseScreen = () => {


  return (
    <View style={styles.container}>
     <Text>Derrota :(

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

export default LoseScreen;