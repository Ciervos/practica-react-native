import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collection from "../../screens/CollectionScreen"

const Stack = createNativeStackNavigator();

const CollectionNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{ title: 'Colección' }}
      />
    </Stack.Navigator>
  )
}

export default CollectionNavigator;