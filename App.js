import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen.js'
import HomeScreen from './src/screens/HomeScreen'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';
import {  CartProvider } from './src/screens/CartContext';
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <CartProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
             
          </Stack.Navigator>
          <Toast/>
      </NavigationContainer>
      </CartProvider>
  );
}

