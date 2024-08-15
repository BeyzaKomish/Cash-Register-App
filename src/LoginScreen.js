import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';



function LoginScreen(){
    return(
        <View style={{  flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
            
            }}>

        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

    )
}

export default LoginScreen;