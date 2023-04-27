import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, Share, ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getPict } from "../data/Api";
import styles from "../styles/HomeScreen.styles";
import Icon from "react-native-vector-icons/FontAwesome";

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

  // State to indicate if the data is being fetched from the API
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the list of images on component mount
  useEffect(() => {
    getPict().then((newImgList) => {
      setImgList(newImgList);
      setIsLoading(false); // Set isLoading to false after the data is fetched
    });
  }, []);

  // Render the list of images with their titles, dates, and explanations
  const renderImgList = () => {
    const img = imgList[imgList.length - 1];

    // Function to handle the share functionality
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: `Check out this amazing image from NASA's APOD! ${img.url}`,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    return (
      // View of the HomeScreen that displays the fetched image
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        {/* Display an ActivityIndicator while the data is being fetched */}
        {isLoading ? <ActivityIndicator size={70} color="darkblue" /> : <Image source={{ uri: img.url }} style={styles.img} />}
        <Text style={styles.date}>{img.date}</Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          {/* Display the explanation text with the ability to expand/collapse */}
          <Text
            numberOfLines={isExpanded ? null : 4}
            style={styles.explanation}
          >
            {img.explanation}
          </Text>
          {/* Display the "Read more" or "Read less" text based on the state of isExpanded */}
          <Text style={styles.read}>
            {isExpanded ? "Read less" : "Read more"}
          </Text>
        </TouchableOpacity>
        {/* Add a button to share the image */}
        <TouchableOpacity onPress={onShare} style={styles.shareButton}>
          <Icon name="share" size={30} color="white" />
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
