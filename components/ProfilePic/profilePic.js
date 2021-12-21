import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {chooseAvatar} from '../../store/actions/character.actions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colors from '../../constants/colors';
import { loadAvatar } from '../../store/actions/character.actions';

function ProfilePic() {
    const dispatch = useDispatch();
    const currAvatar = useSelector(state => state.character.avatar);
    const defaultAvatar = require('../../imgs/personajes/background/45.png')
    const [pickedUri, setPickedUri] = useState(null);
    const [reload,setReload] = useState('');


    //busca en la base de datos
    useEffect(() => {
      handleUpdate()
      
  }, []);



    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        
    
        if (status !== 'granted') {
          Alert.alert(
            'Permisos insuficientes',
            'Necesita dar permisos de la cámara para usar la aplicación',
            [{ text: 'Ok' }],
          );
          return false;
        }
    
        return true;
      }
    
   

    const handleTakePhoto = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return;
    
        const newavatar = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [10,9],
          quality: 0.8,
        });
    
       
        
        

        handleSave(newavatar.uri)
        
      };
     
    
   
    const handleSave = (saveme) => {
        dispatch(chooseAvatar(saveme));
        
            
    }

    const handleUpdate = async () =>{
      dispatch(loadAvatar());
      setPickedUri(currAvatar)

    }

  return (
  <View style={styles.container}> 
     <View> 
      {pickedUri
          ? <Image source={{ uri: pickedUri }} style={styles.image} />
          : <Image source={defaultAvatar} style={styles.image} /> 
        } 
     
     <View style={styles.photoicon}>
     <TouchableOpacity onPress={handleTakePhoto}> 
     <MaterialIcons name="add-a-photo" size={24} color="white" />
     </TouchableOpacity>
     </View>
      
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
       position: 'absolute',
       top: 0, 
       left: 15, 
       right: 5, 
       bottom: 0, 
       zIndex: 1,
    }   
})

export default ProfilePic;