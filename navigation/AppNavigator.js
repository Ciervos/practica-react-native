import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rules from '../screens/RulesScreen';
import Collection from '../screens/CollectionScreen';
import Main from '../screens/StartGameScreen';
import Game from '../screens/GameScreen'

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;