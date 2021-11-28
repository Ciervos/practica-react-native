import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tab';



const AppNavigator = () => (
  <NavigationContainer>
      <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;