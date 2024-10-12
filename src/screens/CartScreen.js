import React, { useState,useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Dimensions,Image } from 'react-native';
import itemsData from '../../utils/items';
import styles from '../styles';
import { CartContext } from './CartContext';
const CartScreen = () => {

    const { cartItems ,setCartItems} = useContext(CartContext);
  
    const removeItemFromCart = (id) => {
      setCartItems(prevCartItems =>
        prevCartItems.map(item => {
          if (item.id === id) {
            if (item.quantity > 1) {
              // Decrease quantity if more than 1
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // Remove item if quantity is 1 (or reaches 0)
              return null;
            }
          }
          return item;
        }).filter(item => item !== null) // Remove null items (items with quantity 0)
      );
    };
    
  
    const renderCartItem = ({ item }) => (
        <View style={styles.itemBox}>
        {/* View for item details (name and price) stacked vertically */}
        <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.item_name}</Text>
        <Text style={styles.itemPrice}>$ {item.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
        </View>
        
        {/* Button aligned to the right */}
        <Button color="red" title="-" onPress={() => removeItemFromCart(item.id)} />
      </View>
      
    );







  return (
    <View style={styles.cartContainer}>
    <Text style={styles.title}>Cart</Text>
    {cartItems.length === 0 ? (
      <Text>Your cart is empty</Text>
    ) : (
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => item.item_code.toString() + index.toString()} 
        
      />
    )}
  </View>
  )
}

export default CartScreen