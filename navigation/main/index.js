import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rules from '../../screens/RulesScreen';
import Main from '../../screens/StartGameScreen';
import Game from '../../screens/GameScreen';
import Win from '../../screens/VictoryScreen';
import Lose from '../../screens/LoseScreen';
import colors from '../../constants/colors';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: colors.color3,
      },
      headerTintColor: colors.color4,
      headerTitleStyle: {
        fontFamily: 'PressStart2P',
        fontSize: 12,
      }}}>
      <Stack.Screen name="Home" component={Main} options={{
          title: 'Bienvenido aventurero'
        }}/>
      <Stack.Screen name="Rules" component={Rules} options={{
          title: 'Reglas'
        }}/>
      <Stack.Screen name="Game" component={Game} options={{
          title: 'Sobrevive y escapa'
        }}/>
      <Stack.Screen name="Victory" component={Win} options={{
          title: '¡Victoria!'
        }} />
      <Stack.Screen name="Lose" component={Lose} options={{
          title: 'Derrota'
        }}/>
    </Stack.Navigator>
  )
}

export default MainNavigator;