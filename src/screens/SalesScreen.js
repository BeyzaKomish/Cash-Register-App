import React, { useState , useContext} from 'react';
import { View, Modal, Button, StyleSheet } from 'react-native';
import ListScreen from './ListScreen';
import CartScreen from './CartScreen';
import { CartContext } from './CartContext';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';


const SalesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {  setCartItems } = useContext(CartContext);

  const deleteAllCartItems = () => {
    setCartItems([]); // Clear all items in the cart
  };




  return (

   

      <View style={styles.container}>


        <View style={styles.listContainer}>
          <ListScreen />
        </View>

        <Button
        
        title="Open Cart"
          onPress={() => {
            setModalVisible(true);
        
          }}
        />


        <Modal

          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}

        >


          <View style={styles.modalView}>

            <CartScreen />
            <Button
            style={{ marginBottom: 10 }}
             title="Checkout"
            
            
            />
            <Button
          
              title="Close"
              onPress={() => {
              setModalVisible(false);
            }}
          />

          <Button
          
          title="Delete All"
          onPress={deleteAllCartItems}


          
          />

         

          </View>
        </Modal>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Keep ListScreen at the top
    
  },
  listContainer: {
    flex: 1, // Takes up available space
    backgroundColor: '#e6e6e6',
    padding: 0,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end', // Slide up from the bottom
    backgroundColor: 'white',
    padding: 10,
  },
});

export default SalesScreen;
