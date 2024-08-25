import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen.js'
import HomeScreen from './src/screens/HomeScreen'
import 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
             
          </Stack.Navigator>
          <Toast/>
      </NavigationContainer>
  );
}

//i was plannning on using a json server to mock services but is this possible :Login Authentication Tutorial in React Native using AsyncStorage | useReducer, useContext, useMemo
