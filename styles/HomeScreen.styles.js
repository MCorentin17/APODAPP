import { StyleSheet } from "react-native";

// Styles for components
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
    height: 350,
    borderRadius: 20,
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
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "rgb(11, 61, 145)",
    borderRadius: 5,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  shareButton: {
    position: 'absolute',
    top: 120,
    right: 10,
    backgroundColor: "rgb(11, 61, 145)",
    borderRadius: 5,
    color: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default styles;
