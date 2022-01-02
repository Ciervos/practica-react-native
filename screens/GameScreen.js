
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from '../components/Lists/itemList';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';


const GameScreen = props => {
  const dispatch = useDispatch();
  const mobs = useSelector(state => state.enemies.enemies);
  const ourItems = useSelector(state => state.items.items);
  const currLife = useSelector(state => state.character.life);
  const [currMob,setCurrMob] = useState(null)
  const [currItems,setCurrItems] = useState(ourItems)
  const [fullLife,setFullLife] = useState(true)

  useEffect(() => {
    const random = Math.floor(Math.random() * mobs.length)
    
    checkItems(ourItems)
    setCurrMob(mobs[random]) 
}, []);

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

const handleSelected = () =>{
  console.log("s")
}

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
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