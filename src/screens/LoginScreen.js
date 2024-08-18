import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import {  View ,Text} from 'react-native';
import { TextInput , Button , Avatar} from 'react-native-paper';
import styles from '../styles';
import { showToast } from '../../utils/toast';



function LoginScreen(){
   
  const [userCode,setUserCode] = useState('');
  const [password,setPassword]=useState('');


const handleLogin = ()=> {
  if(validate())
    {
      console.log('proceed');
    }
  
}

const validate = () => {
  let result = true;

  if (userCode.length ===0 ) {
    result= false;
    showToast('error', 'Validation Error', 'User code is required.');

    }

    else if (password.length ===0 ) {
      result= false;
      showToast('error', 'Validation Error', 'Password is required.');
  
      }
  
 return result;
}

    return(
        <View style={{  flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
            
            }}>

            <Avatar.Image style={styles.image} size={180} source={require('../../assets/images/toyota-market-logo.png')} />


        <TextInput 

            style={styles.input} 
            label="User-Code" 
            mode="outlined" 

            value={userCode}
            onChangeText={(text) => setUserCode(text)}
            placeholder="Enter your user-code"
            
        />




      <TextInput 

            style={styles.input} 
            label="Password" 
            mode="outlined" 
            secureTextEntry 

            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your password"
            
       />


      <Button 
            style={styles.button} 
             mode="contained"
              onPress={handleLogin}
              
              >LOGIN</Button>



        <StatusBar style="auto" />


      </View>

    )
}

export default LoginScreen;