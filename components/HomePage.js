import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getPict } from "../data/Api";
import styles from "../styles/HomePage.styles";

Icon.loadFont();

export default function HomePage() {
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url: "url",
      date: "",
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getPict().then((newImgList) => {
      setImgList(newImgList);
    });
  }, []);

  const renderImgList = () => {
    const img = imgList[imgList.length - 1];
    return (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <Image source={{ uri: img.url }} style={styles.img} />
        <Text style={styles.date}>Image du {img.date} :</Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text
            numberOfLines={isExpanded ? null : 2}
            style={styles.explanation}
          >
            {img.explanation}
          </Text>
          <Text style={styles.read}>
            {isExpanded ? "Read less" : "Read more"}
          </Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderImgList()}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
