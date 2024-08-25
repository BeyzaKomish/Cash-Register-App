
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
  image:{
    margin:30,

  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
},
});

export default styles;
