import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';


import HomeStack from './HomeStack'
import AxiosScreen from '../Itens/AxiosScreen'
import CalculadoraScreen from '../Itens/CalculadoraScreen'
import WhatsAppScreen from '../Itens/WhatsAppScreen'



const DrawerSettings = createDrawerNavigator(
{
  AxiosApp: {
    screen: HomeStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => 
      <Ionicons name="md-book" size={17} />,
    }
  }, 
  WhatsApp: {
    screen: WhatsAppScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Ionicons name="md-book" size={17} />,
    }
  }, 
   Calculadora: {
    screen: CalculadoraScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Ionicons name="md-book" size={17} />,
    }
  }
},
{
  initialRouteName: "AxiosApp",
  hideStatusBar: true,
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
  overlayColor: '#6b52ae',
  contentOptions: {
    activeTintColor: '#000',
    activeBackgroundColor: '#6b52ae',
  },
});


export default DrawerSettings
