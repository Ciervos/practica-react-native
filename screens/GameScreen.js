
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {selectItem} from '../store/actions/items.actions';
import ItemList from '../components/Lists/itemList';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';


const GameScreen = props => {
  const dispatch = useDispatch();
  const mobs = useSelector(state => state.enemies.enemies);
  const ourItems = useSelector(state => state.items.items);
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
  console.log(weakness)
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
    }else{
     console.log("perdiste") 
     //restaurar el estado al default(items selected a false)
    }
  }else{
    //revisar stage
   if(currStage==3){
    console.log("pantalla de Victoria")
    //restaurar estado default
   }else{
    //sumar +1 al stage
    setCurrStage(currStage+1)
    //reupload gamescreen 
    updateMob()
   } 
  }
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      subcontainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 18,
      },
      guide:{
        fontFamily: 'PressStart2P',
        
       },
       image:{
        height: 100,
        width: 100
       },
       desc:{
        fontFamily: 'PressStart2P',
        fontSize: 10
       },
       life:{
       height: 50,
       flexDirection: 'row',
       margin: 20
       }
  
});

export default GameScreen;