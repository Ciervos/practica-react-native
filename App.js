import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import items from './constants/items';
import colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const FONT_DEFAULT = 'PressStart2P';

export default function App() {
  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

const [startAdventure,setStartAdventure] = useState(false)
const [ourBackpack,setOurBackpack] = useState()

if (!loaded) return <AppLoading />;

const handleStartGame = backpack =>{
   
  setOurBackpack(backpack)
  setStartAdventure(true)
}

const handleComeBack = () =>{
  setStartAdventure(false)
}

const content = startAdventure ? <GameScreen backpack={ourBackpack} handleComeBack={handleComeBack}/> : <StartGameScreen onStartGame={handleStartGame} />

return(
  <View style={styles.container}>
    {content}
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
