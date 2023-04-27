import { StyleSheet } from "react-native";

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
  },
  title: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    flexWrap: "wrap",
   
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
    marginBottom: 10,
  },
});

export default styles;
