import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';


const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App