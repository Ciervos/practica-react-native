
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {selectItem} from '../store/actions/items.actions';
import items from '../constants/items';
import colors from '../constants/colors';
import ItemList from '../components/Lists/itemList';
import MsgModal from '../components/Modal/MsgModal';
import ProfilePic from '../components/ProfilePic/profilePic';

const StartGameScreen = ({navigation}) =>{
  
  const dispatch = useDispatch();
  const inventory = useSelector(state => state.items.items);
  const [backpack,setBackpack] = useState([])
  const [modalVisible,setModalVisible] = useState(false)
  
//Función Selecionar items
  const handleSelected = (item) =>{
    
    if(item.selected){

      const newbackpack = backpack.filter(currItem=> currItem.id !== item.id)

      setBackpack(newbackpack)

    }else{
      const newitem={
      id: item.id,
      name: item.name,
      image: item.image,
      type: item.type,
      power: item.power,
   }; 
    setBackpack([
      ...backpack,
      newitem,
    ]);
   }
      
    const newinventory = inventory.map((currItem)=>{
       if(item.id===currItem.id){
       return{
         ...currItem,
         selected: !currItem.selected
       }
      }

      return currItem;
      
     })   

  
    
    dispatch(selectItem(newinventory))

    

   } 

  //Función boton
  const handlePress =()=>{
    if(backpack.length!==3){
      setModalVisible(true)
    }else{
       
      navigation.navigate('Game')
    }
  }

  const handleModalOk = () =>{
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <ProfilePic/>
      <Text style={styles.guide}>Para pasar a la siguiente pantalla necesitas seleccionar 3 items distintos</Text>
      <View style={styles.buttons}>
      <Button 
       title="Iniciar aventura"
       onPress={handlePress}
       color={colors.color2}
       />
        <Button 
       title="Reglas"
       onPress={()=>{navigation.navigate('Rules')}}
       color={colors.color2}
       />

        </View>
      <ItemList inventory={inventory} handleSelected={handleSelected}/>
      <MsgModal modalVisible={modalVisible} handleModalOk={handleModalOk}/>
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
  buttons:{
   flexDirection: 'row', 
   padding: 5,
   justifyContent: 'space-between',
   width: "85%",
  
  },
  guide:{
  fontFamily: 'PressStart2P',
  
 },
 
  
});

export default StartGameScreen;