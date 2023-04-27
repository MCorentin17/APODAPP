import { StyleSheet } from "react-native";

// Styles for components
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
    imageText: {
      marginTop: 10,
    },
    scrollView: {
      backgroundColor: "#fff",
      flexGrow: 1,
      paddingBottom: 50,
    },
    img: {
      width: "90%",
      height: 400,
      borderRadius: 20,
      marginLeft: "auto", 
      marginRight: "auto",
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      marginTop: 20,
      textAlign: "center",
      flexWrap: "wrap",
      marginBottom: 10,
    },
    date: {
      justifyContent: "center",
      marginBottom: 10,
      fontSize: 20,
      textAlign: "center", 
    },
    explanation: {
      textAlign: "justify",
      lineHeight: 24,
      borderColor: "black",
      marginLeft: 20,
      marginRight: 20,
    },
    read: {
      textAlign: "center",
      fontWeight: "bold",
      color: '#fff',
      fontWeight: 'bold',
      backgroundColor: 'rgb(11, 61, 145)',
      borderRadius: 5,
      alignSelf: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 10,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: 'rgb(11, 61, 145)',
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
    },
    modalContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    modalImg: {
      width: "100%",
      height: "100%",
    },
    closeButton: {
      padding: 10,
      position: "absolute",
      top: 40,
      right: 20,
    },
    closeButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });  
  
  export default styles;