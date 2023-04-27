import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginVertical: 20,
    },
    imageContainer: {
      marginVertical: 20,
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
    imageText: {
      marginTop: 10,
    },
  });  
  
  export default styles;