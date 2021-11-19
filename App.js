import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import items from './constants/items';
import colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';

const FONT_DEFAULT = 'PressStart2P';

export default function App() {
  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/PressStart2P-Regular.ttf'),
  });



if (!loaded) return <AppLoading />;





return(

  <AppNavigator/>
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
