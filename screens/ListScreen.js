import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { getPict } from "../data/Api";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/ListScreen.styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ListScreen() {
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url: "url",
      date: "",
      title: "",
      explanation: "",
    },
  ]);

  useEffect(() => {
    getPict().then((newImgList) => {
      setImgList(newImgList);
    });
  }, []);

  const renderImgList = () => {
    const reversedImgList = [...imgList].reverse();

    return reversedImgList.map((img) => (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <Image source={{ uri: img.url }} style={styles.img} />
        <Text style={styles.text}>{img.date}</Text>
      </React.Fragment>
    ));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderImgList()}
        </ScrollView>
        <View style={styles.scrollIndicator}>
            <Icon name="chevron-down" size={30} color="white" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
