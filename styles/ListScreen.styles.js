import { StyleSheet } from "react-native";

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: 500,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    marginTop: 20, 
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
});

export default styles;