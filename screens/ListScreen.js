import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import { getPict } from "../data/Api";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/ListScreen.styles";

export default function ListScreen() {
  // State to hold the list of images
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url: "url",
      date: "",
      title: "",
      explanation: "",
    },
  ]);

  // Load the list of images from the API when the component mounts
  useEffect(() => {
    getPict().then((newImgList) => {
      setImgList(newImgList);
      setIsLoading(false); // Set isLoading to false after the data is fetched
    });
  }, []);

  // State to indicate if the data is being fetched from the API
  const [isLoading, setIsLoading] = useState(true);
  // State to control the visibility of the image modal
  const [modalVisible, setModalVisible] = useState(false);
  // State to hold the URL of the image that was selected to view in the modal
  const [selectedImage, setSelectedImage] = useState("");
  // State to hold the number of images to show
  const [numOfImgShown, setNumOfImgShown] = useState(5);

  // Function to load more images when the user reaches the end of the list
  const handleLoadMore = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 50;
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      setNumOfImgShown(numOfImgShown + 5);
    }
  };

  // Function to handle when an image in the list is pressed and sets the selected image's URL and makes the modal visible
  const handleImagePress = (url) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  // Function to render the list of images
  const renderImgList = () => {
    const reversedImgList = [...imgList].reverse();
    const limitedImgList = reversedImgList.slice(0, numOfImgShown);

    // Map through the limited image list and create a TouchableOpacity for each image
    return limitedImgList.map((img) => (
      <TouchableOpacity key={img.id} onPress={() => handleImagePress(img.url)}>
        {/* Use React.Fragment to group multiple elements without adding an extra node to the DOM */}
        <React.Fragment>
          <Text style={styles.title}>{img.title}</Text>
          {/* Display a loading spinner if the image is still loading, otherwise display the image */}
          {isLoading ? (
            <ActivityIndicator size={70} color="darkblue" />
          ) : (
            <Image source={{ uri: img.url }} style={styles.img} />
          )}
          <Text style={styles.date}>{img.date}</Text>
        </React.Fragment>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* ScrollView to display the list of images  */}
        <ScrollView
          contentContainerStyle={styles.scrollView}
          onScroll={({ nativeEvent }) => handleLoadMore(nativeEvent)}
          scrollEventThrottle={800}
        >
          {renderImgList()}
        </ScrollView>
        {/* View to display the scroll indicator */}
        <View style={styles.scrollIndicator}>
          <Icon name="chevron-circle-down" size={40} color="white" />
        </View>
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.modalImage}
              resizeMode="contain"
            />
            {/* TouchableOpacity to close the modal  */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="times-circle" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
