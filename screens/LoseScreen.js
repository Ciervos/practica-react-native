import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import colors from '../constants/colors';

const LoseScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
     <Text>Derrota :( </Text>
      <Button 
       title="Volver"
       onPress={()=>{navigation.navigate('Home')}}
       color={colors.color2}
       />
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