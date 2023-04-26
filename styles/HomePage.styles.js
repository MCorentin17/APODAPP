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
    borderTopColor: "black",
    borderTopWidth: 2,
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
  },
  read: {
    textAlign: "center",
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});

export default styles;
