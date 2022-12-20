import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabNavigator from './BottomTabNavigator';
import Opcion2 from './stack-navigators/Opcion2';
import Opcion3 from './stack-navigators/Opcion3';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'pink',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold' }} >Abigail Cisneros González: Drawer </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
    screenOptions={({ route }) => ({
      drawerActiveTintColor: 'red',
      drawerInactiveTintColor: 'green',
      drawerStyle: {
        backgroundColor: 'lemonchiffon',
      },
    })}
      drawerContent={DrawerHeaderContent}>
      <Drawer.Screen 
        name={'Button Tab'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Inico',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Opcion 2'}
        component={Opcion2}
        options={{
          drawerLabel: 'Opcion 2',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="account-details" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Opcion 3'}
        component={Opcion3}
        options={{
          drawerLabel: 'Opcion 3',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="ufo-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});

export default DrawerNavigator;