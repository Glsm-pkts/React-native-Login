import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Router = () => {
  return (
<Stack.Navigator
initialRouteName='Login'
screenOptions={
   {headerShown: false}
}
>
   <Stack.Screen name='Login' component={LoginScreen}/> 
   <Stack.Screen name='Singup' component={SignupScreen}/>
</Stack.Navigator>
  )
}

export default Router