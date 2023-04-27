import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getPict } from "../data/Api";
import styles from "../styles/HomeScreen.styles";

// Functional component that displays the home screen
export default function HomeScreen() {
  // State to hold the list of images fetched from the API
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url: "url",
      date: "",
      title: "",
      explanation: "",
    },
  ]);

  // State to control the expansion of the explanation text
  const [isExpanded, setIsExpanded] = useState(false);

  // Fetch the list of images on component mount
  useEffect(() => {
    getPict().then((newImgList) => {
      setImgList(newImgList);
    });
  }, []);

  // Render the list of images with their titles, dates, and explanations
  const renderImgList = () => {
    const img = imgList[imgList.length - 1];
    return (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <Image source={{ uri: img.url }} style={styles.img} />
        <Text style={styles.date}>{img.date}</Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text
            numberOfLines={isExpanded ? null : 4}
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

  // Return the JSX for the home screen
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
