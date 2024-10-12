import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import favoritesData from '../../utils/favorites'; // Import your favorites JSON
import styles from '../styles';
import { CartContext } from './CartContext';
import SearchBarComponent from './SearchBar';

const Tab = createMaterialTopTabNavigator();

const ListScreen = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addItemToCart = (item) => {

    
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(cartItem => cartItem.item_code === item.item_code);
  
    if (existingItem) {
      // If the item exists, increase its quantity
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.item_code === item.item_code
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Update quantity
            : cartItem
        )
      );
    } else {
      // If the item doesn't exist, add it with a quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const renderItem = ({ item }) => (
    <View style={styles.itemBox}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.item_name}</Text>
        <Text style={styles.itemPrice}>$ {item.price}</Text>
        
      </View>
      <Button color="green" title="+" onPress={() => addItemToCart(item)} />
    </View>
  );


  const FavoritesScreen = () => (
    <View style={styles.itemsContainer}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favoritesData} // Replace this with the actual favorites data
        renderItem={renderItem}
        keyExtractor={(item, index) => item.item_code.toString() + index.toString()} 
      />
    </View>
  );

  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={SearchBarComponent} />

      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default ListScreen;
