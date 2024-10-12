import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import {  View ,Vibration} from 'react-native';
import { TextInput , Button , Avatar} from 'react-native-paper';
import styles from '../styles';
import { showToast } from '../../utils/toast';
import axios from 'axios';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen(){
   
  const [userCode,setUserCode] = useState('');
  const [password,setPassword]=useState('');

  const navigation = useNavigation();



  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          navigation.navigate('HomeScreen');
        }
      } catch (error) {
        console.error('Error checking user session:', error);
      }
    };
    checkUserSession();
  }, []);




  const handleLogin = async () => {

    if(validate())
    {
      
      try {
        // Make a GET request with query parameters
       
        const response = await axios.get('https://40ef-2a00-1880-a000-6565-dd91-5ed1-82f6-7eef.ngrok-free.app/users', {
          params: {
            userCode: userCode,
            password: password
          }        });
        
        console.log(response.data); // Inspect the API response

    let user = null;
    if (Array.isArray(response.data)) {
         user = response.data.find(user => user.userCode === userCode && user.password === password);
    } else {
        console.error('API response is not an array:', response.data);
    }
        if (user) {


          await AsyncStorage.setItem('user', JSON.stringify(user));

          showToast('success', 'Login Successful', 'You will be redirected shortly.');

          setTimeout(() => {
            navigation.navigate(HomeScreen);
          }, 700);

        } else {
          Vibration.vibrate(300);
          showToast('error', 'Validation Error', 'Login Credentials Are Invalid');
        }
   
        
    } catch (error) {
        console.error('Error fetching data:', error); 
      }
      

    }

  };

const validate = () => {
  let result = true;

  if (userCode.length ===0 ) {
    result= false;
    Vibration.vibrate(300);
    showToast('error', 'Validation Error', 'User code is required.');

    }

    else if (password.length ===0 ) {
      result= false;
      Vibration.vibrate(300);
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
            name="User-code"
            style={styles.input} 
            label="User-Code" 
            mode="outlined" 

            value={userCode}
            onChangeText={(text) => setUserCode(text)}
            placeholder="Enter your user-code"
            
        />




      <TextInput 
            name="password"
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