import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import {  View } from 'react-native';
import { TextInput , Button , Avatar} from 'react-native-paper';
import styles from '../styles';
import { showToast } from '../../utils/toast';
import axios from 'axios';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
function LoginScreen(){
   
  const [userCode,setUserCode] = useState('');
  const [password,setPassword]=useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {

    if(validate())
    {
      
      try {
        // Make a GET request with query parameters
       
        const response = await axios.get('https://57b2-213-74-41-85.ngrok-free.app/users', {
          params: {
            userCode: userCode,
            password: password
          }
        });
        
        // Check if any user matches the provided credentials
        console.log(response.data);
        let user=null;
        if(Array.isArray(response.data))
        {
          user = response.data.find(user => user.userCode === userCode && user.password=== password)
         
        }

        if (user) {
    
          showToast('success', 'Login Successful', 'You will be redirected shortly.');
        setTimeout(() => {
             navigation.navigate(HomeScreen);
         }, 700);
          
      } else {
        
        showToast('error', 'Validation Error', 'Login Credentials Are Invalid');
      }
        // Check if response.data is an array
        
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
      }
      

    }

  };

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

            <Avatar.Image style={styles.image} size={270} source={require('../../assets/images/toyota-market-logo.png')} />


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