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
  },
  title: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
  },
  text: {
    fontFamily: "serif",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default styles;