import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './store';

const FONT_DEFAULT = 'PressStart2P';

import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect')
    console.log(err.message)
  })

export default function App() {
  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/PressStart2P-Regular.ttf'),
  });



if (!loaded) return <AppLoading />;





return(
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
  
  
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
