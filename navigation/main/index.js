import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rules from '../../screens/RulesScreen';
import Main from '../../screens/StartGameScreen';
import Game from '../../screens/GameScreen'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  )
}

export default MainNavigator;