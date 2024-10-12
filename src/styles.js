
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  input: {
    width: '80%', // Adjust width as needed
    marginBottom: 16, // Add margin between inputs
  },
  button: {
    marginTop: 16, // Add margin above the button
  },
 
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
},
container: {
  flex: 1,
  flexDirection: 'row', // Split screen horizontally
},
image: {

  width: 15,               // Set width for the circle (can adjust as needed)
  height: 15,              // Set height for the circle (same as width for a perfect circle)
  borderRadius: 25,        // Half of the width/height to make it a circle
  overflow: 'hidden',      // Ensure the image doesn't overflow the circle
  resizeMode: 'cover',     // Make the image cover the area without distortion
},


cartContainer: {
  flex: 1, // Right side takes half the screen
  padding: 10,
  backgroundColor: '#fff',
},
title: {
  fontSize: 15,
  marginBottom: 10,
  fontWeight: 'bold',
},
item: {
  marginBottom: 10,
},
cartItem: {
  marginBottom: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
},
removeButton: {
  color: 'red',
},itemsContainer: {
  flex: 1, // Left side takes half the screen
  padding: 3,
  backgroundColor: '#f8f9fa',
  
},
itemBox: {
  flexDirection: 'row', // Items are aligned in a row (horizontally)
  alignItems: 'center', // Vertical centering for image, text, and button
  justifyContent: 'space-between', // Space between image and button
  padding: 3, // Inner padding for the item box
  borderWidth: 1, // Optional border for visibility
  borderColor: '#ccc',
  borderRadius: 5, // Rounded corners
  backgroundColor: '#fff', // Set background color to white
  elevation: 2, // Shadow for Android
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1,
  padding:15,
  margin:8, // Button stays at the far right
},

itemDetails: {
  flexDirection: 'column',         // Stack item_name and price vertically
  justifyContent: 'center',
  flexWrap:'wrap', 
         // Center items vertically inside this container
},

itemPrice: {
  marginLeft: 20,
      // Add gap between item_name and price
},


itemName: {
  fontSize: 12,
  fontWeight: 'bold',
  marginBottom: 5,
  color: '#333',           // Darker color for the text
},
itemPrice: {
  fontSize: 12,
  color: '#666',           // Lighter color for the price text
},
addToCartButton: {
  backgroundColor: '#ff6600',  // Orange button color
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderRadius: 5,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',           // White text on the button
  fontSize: 8,
  fontWeight: '600',
},

});

export default styles;
