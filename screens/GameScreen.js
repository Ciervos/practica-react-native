
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {selectItem} from '../store/actions/items.actions';
import {changeStats} from '../store/actions/character.actions';
import ItemList from '../components/Lists/itemList';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';


const GameScreen = props => {
  const dispatch = useDispatch();
  const mobs = useSelector(state => state.enemies.enemies);
  const ourItems = useSelector(state => state.items.items);
  const stats = useSelector(state => state.character);
  const [currMob,setCurrMob] = useState(null)
  const [currItems,setCurrItems] = useState(ourItems)
  const [fullLife,setFullLife] = useState(true)
  const [currStage,setCurrStage] = useState(1)

  useEffect(() => {
    
    updateMob()
    checkItems(ourItems)
}, []);

const updateMob = () =>{

  const random = Math.floor(Math.random() * mobs.length)
  setCurrMob(mobs[random]) 
}
const checkItems = (items) =>{
  
  let newArray = []
   items.map(function(obj){
    
    
    if(obj.selected){
     newArray.push(obj)
    }
    return newArray
    
 });

 setCurrItems(newArray)

}

const handleSelected = (item) =>{
  
  //se deseleciona por haber sido usado
  
  const newinventory = ourItems.map((currItem)=>{
    if(item.id===currItem.id){
    return{
      ...currItem,
      selected: !currItem.selected
    }
   }

   return currItem;
   
  })
  dispatch(selectItem(newinventory))
  checkItems(newinventory)
  //se ve si su poder y tipo  coincide
  let coincide = 0
 currMob.weakness.map((weakness)=>{
 
  if((weakness == item.power)||(weakness == item.type)){
   
   coincide = coincide + 1

  }
  return coincide
 }) 
 handleNextStep(coincide)
}

const handleNextStep = (update) =>{
  if(update === 0){
    if((fullLife)&&(currMob.power<2)){
      setFullLife(false)
      updateMob()
      setCurrStage(currStage+1)
      if(currStage==3){
    
        resetItems()
        props.navigation.navigate('Victory')
      
       }
    }else{
     
     resetItems()
     dispatch(changeStats(false,stats.lose+1,stats.win))
     props.navigation.navigate('Lose')
    }
  }else{
    //revisar stage
   if(currStage==3){
    
    resetItems()
    dispatch(changeStats(true,stats.win+1,stats.lose))
    props.navigation.navigate('Victory')
    
    
   }else{
    //sumar +1 al stage
    setCurrStage(currStage+1)
    //reupload gamescreen 
    updateMob()
   } 
  }
}

const resetItems =()=>{
  
  const newinventory = ourItems.map((currItem)=>{
    
    return{
      ...currItem,
      selected: false
    }
   
   
  })
  
  dispatch(selectItem(newinventory))
}

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={styles.guide}> Dungeon: {currStage}/3</Text>
      <Text style={styles.guide}> Elige un item para avanzar</Text>
   
                {currMob
          ? <Image source={currMob.image} style={styles.image} />

          : <Image source={require('../imgs/monsters/con20.png')} style={styles.image} /> 
        } 
       {currMob
          ?<Text style={styles.guide}>{currMob.name}</Text>: null}
       {currMob
          ?<Text style={styles.desc}>{currMob.description}</Text>: null}

       <ItemList inventory={currItems} handleSelected={handleSelected}/>  
       <View style={styles.life}>
       <Text style={styles.guide}>Vida: </Text>
       {fullLife ? <Ionicons name="heart-sharp" size={30} color={'red'} />:<Ionicons name="heart-half" size={30} color={'red'} />} 
       </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.color1,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      subcontainer:{
        flex: 1,
        backgroundColor: colors.color1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 18,
      },
      guide:{
        fontFamily: 'PressStart2P',
        color: colors.color4,
        
       },
       image:{
        height: 100,
        width: 100
       },
       desc:{
        fontFamily: 'PressStart2P',
        fontSize: 10,
        color: colors.color4,
       },
       life:{
       height: 50,
       flexDirection: 'row',
       margin: 20
       }
  
});

export default GameScreen;