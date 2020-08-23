import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons' 

import PayButton from '../components/PayButton';

import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Pay from '../pages/Pay';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard'
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline'
  },
  Settings: {
    lib: AntDesign,
    name: 'setting'
  }
}

const BottomTab = () => {
  return (
    <Navigator
      initialRouteName="Wallet"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if(route.name === 'Pay') {
            return (
            <PayButton 
              onPress={() => navigation.navigate('Pay')}
              focused={focused}
            />
          )}

          const {lib: Icon, name} = icons[route.name]
          return <Icon name={name} size={size} color={color}/>
        }
      })}

      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c'
      }}
    >
      <Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Início' }}
      />
      <Screen 
        name="Wallet" 
        component={Wallet}
        options={{ title: 'Carteira' }}
      />
      <Screen 
        name="Pay"
        component={Pay}
        options={{ title: '' }}
      />
      <Screen 
        name="Notifications" 
        component={Pay} 
        options={{ title: 'Notificações' }}
      />
      <Screen 
        name="Settings" 
        component={Pay} 
        options={{ title: 'Ajustes' }}
      />
    </Navigator>
  );
}

export default BottomTab;