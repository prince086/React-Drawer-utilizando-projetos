import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import AxiosScreen from '../Itens/AxiosScreen'
import CalculadoraScreen from '../Itens/CalculadoraScreen'
import WhatsAppScreen from '../Itens/WhatsAppScreen'

export default createStackNavigator({
  AxiosApp: { screen: AxiosScreen },
  Calculadora: { screen: CalculadoraScreen },
  WhatsApp: { screen: WhatsAppScreen }
})