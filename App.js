import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Treinos from './screens/Treinos';
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Treinos" component={Treinos} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}