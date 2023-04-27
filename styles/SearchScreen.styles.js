import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
    scrollView: {
      backgroundColor: "#fff",
      alignItems: "center",
      paddingBottom: 50,
    },
    img: {
      width: "90%",
      height: 350,
    },
    title: {
      fontFamily: "serif",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
      textAlign: "center",
      flexWrap: "wrap",
      marginBottom: 10,
    },
    date: {
      fontFamily: "serif",
      justifyContent: "center",
      marginBottom: 20,
    },
    explanation: {
      fontFamily: "serif",
      textAlign: "center",
      lineHeight: 24,
      borderColor: "black",
      marginLeft: 9,
      marginRight: 9,
    },
    read: {
      textAlign: "center",
      fontWeight: "bold",
      color: '#fff',
      fontWeight: 'bold',
      backgroundColor: 'purple',
      borderRadius: 5,
      alignSelf: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 10,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: 'purple',
      borderRadius: 5,
      alignSelf: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    noDateSelected: {
      textAlign: "center",
      fontWeight: "bold",
      borderBottomColor: "black",
      marginTop: 5,
    }
  });  
  
  export default styles;