import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Image } from "react-native";
import { useState } from "react";
import BottomTab  from "./components/BottomTab";


export default function App() {
  const [img, setImg] = useState("");

  const getPict = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImg(data.url);
        console.log(img);
      });
  };
  getPict();

  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.img} />
      <Button
        onPress={getPict}
        title="New Picture"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <BottomTab  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "80%",
    height: "45%",
    marginBottom: "5%",
    marginTop: "10%"
  },
  tabbar: {
    flex: 1,
    alignItems: "center",
  }
});
