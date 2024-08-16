import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput , Button , Avatar} from 'react-native-paper';
import styles from './styles';




function LoginScreen(){
    return(
        <View style={{  flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
            
            }}>

            <Avatar.Image style={styles.image} size={180} source={require('../assets/images/toyota-market-logo.png')} />
        <TextInput style={styles.input} label="User-Code" mode="outlined" />
      <TextInput style={styles.input} label="Password" mode="outlined" secureTextEntry />
      <Button style={styles.button}   mode="contained">LOGIN</Button>
        <StatusBar style="auto" />
      </View>

    )
}

export default LoginScreen;