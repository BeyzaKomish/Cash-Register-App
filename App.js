import React from 'react';
import LoginScreen from './src/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import { StyleSheet, Text, View } from 'react-native';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


