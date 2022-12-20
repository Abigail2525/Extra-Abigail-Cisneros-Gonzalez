import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet, View} from 'react-native';

import HomeStackNavigator from './Home';
import BookStackNavigator from './stack-navigators/Prueba2';
import ContactStackNavigator from './stack-navigators/Prueba3';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Boton2 from './stack-navigators/Prueba2';
import Boton3 from './stack-navigators/Prueba3';
import Prueba2 from './stack-navigators/Prueba2';
import Prueba3 from './stack-navigators/Prueba3';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen"   screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'black',
      
    })}>
      <Tab.Screen 
        name= {'Home'}
        component={Home}
        options={{
          tabBarLabel: 'Inico ' ,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Prueba 2'}
        component={Prueba2}
        options={{
          tabBarLabel: 'Prueba 2',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Prueba 3'}
        component={Prueba3}
        options={{
          tabBarLabel: 'Prueba 3',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="atom" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;