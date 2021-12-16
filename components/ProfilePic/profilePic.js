import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {chooseAvatar} from '../../store/actions/character.actions';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { readDirectoryAsync } from 'expo-file-system';

function ProfilePic() {
    const dispatch = useDispatch();
    const currAvatar = useSelector(state => state.character.avatar);
    const defaultAvatar = require('../../imgs/personajes/background/45.png')
    const [pickedUri, setPickedUri] = useState(null);

    const handleTakePhoto = () => {
        console.log("click")
      };
   
  return (
  <View style={styles.container}> 
     <View> 
      {pickedUri
          ? <Image source={{ uri: pickedUri }} style={styles.image} />
          : <Image source={defaultAvatar} style={styles.image} /> 
        } 
    <TouchableHighlight onPress={handleTakePhoto}> 
     <View style={styles.photoicon}>
     <MaterialIcons name="add-a-photo" size={24} color="white" />
     </View>
    </TouchableHighlight>
    </View>
        
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
       position: 'relative', 
       width: 200,
       height: 200,
   
      
    },
    image:{
        width: 150,
        height: 150,    
        borderRadius: 80,
        margin: 10,
        position: 'absolute',
        top: 0, 
        left: 15, 
        right: 5, 
        bottom: 0, 
       },
    photoicon:{
       backgroundColor: colors.color2, 
       height: 50,
       width: 50, 
       borderRadius: 80,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       zIndex: 2,
       position: 'absolute',
       top: 0, 
       left: 15, 
       right: 5, 
       bottom: 0, 
    }   
})

export default ProfilePic;