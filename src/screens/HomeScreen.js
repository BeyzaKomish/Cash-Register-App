import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Button , BottomNavigation } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../styles';
import SalesScreen from './SalesScreen';
import ProfileScreen from './ProfileScreen';
import ReportScreen from './ReportScreen';
import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
  
    const Tab = createBottomTabNavigator();



    function HomeContent() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>

          </View>
        );
      }

   

    return (
       
            <Tab.Navigator
            
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,

                tabBarStyle: { 
                   

                    borderRadius:20,
                    margin:10,
                  height: 70, // Set the height here
                  padding:5, // Optional: Add padding if needed
                },
              }}
              >

                <Tab.Screen 
                        name="Home"
                        
                        component={HomeContent}
                        options={{
                            tabBarIcon : ({focused}) => {
                                return(
                                    <View style={styles.container}>
                                  <AntDesign name="home" size={40} color={focused ?"#111" : "#6C22A6"} />
                           


                                </View>
                                )
                            }
                        }}
                 
                 
                 />
                <Tab.Screen name="Sales" component={SalesScreen}  
                
                options={{
                    tabBarIcon : ({focused}) => {
                        return(
                            <View style={styles.container}>
                                <MaterialCommunityIcons name="sale" size={40} color={focused ?"#111" : "#6C22A6"} />
                           


                        </View>
                        )
                    }
                }}
                
                
                />
                <Tab.Screen name="Reports" component={ReportScreen} 
                

                options={{
                    tabBarIcon : ({focused}) => {
                        return(
                            <View style={styles.container}>
                           <Entypo name="text-document" size={40} color={focused ?"#111" : "#6C22A6"} />


                        </View>
                        )
                    }
                }}

                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                
                options={{
                    tabBarIcon : ({focused}) => {
                        return(
                            <View style={styles.container}>
                       <Ionicons name="person-circle" size={40} color={focused ?"#111" : "#6C22A6"} />
                        </View>
                        )
                    }
                }}


                />

            </Tab.Navigator>

      
    );
}


