import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons , MaterialCommunityIcons } from '@expo/vector-icons';

import CollectionNavigator from '../collection';
import MainNavigator from '../main';
import colors from '../../constants/colors';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="HomeTab"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-home" size={24} color={focused ? colors.color5 : colors.color2} />
              <Text style={styles.text}>Home</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="CollectionTab"
        component={CollectionNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <MaterialCommunityIcons name="treasure-chest" size={24} color={focused ? colors.color5 : colors.color2} />
              <Text style={styles.text}>Collection</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.color6,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: colors.color2, 
  }
});

export default TabNavigator;