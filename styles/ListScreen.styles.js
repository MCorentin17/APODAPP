import { StyleSheet } from "react-native";

// Styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#fff",
    flexGrow: 1,
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
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  date: {
    justifyContent: "center",
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center", 
  },
  text: {
    justifyContent: "center",
    marginBottom: 20,
    fontSize: 20,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    left: 350,
    
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
