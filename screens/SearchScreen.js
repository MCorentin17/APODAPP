import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getPictByDate } from "../data/Api";
import styles from "../styles/SearchScreen.styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SearchScreen() {
  // State variables
  const [selectedDate, setSelectedDate] = useState(null);
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url: "url",
      date: "2023-01-01",
      title: "",
      explanation: "",
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);
    // State to control the visibility of the image modal
  const [modalVisible, setModalVisible] = useState(false);
    // State to hold the URL of the image that was selected to view in the modal
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Fetches image list based on the selected date
    if (selectedDate) {
      getPictByDate(selectedDate).then((newImgList) => {
        setImgList(newImgList);
        setShowCalendar(false);
      });
    }
  }, [selectedDate]);

  const handleImagePress = (url) => {
    // Sets the selected image and opens the modal
    setSelectedImage(url);
    setModalVisible(true);
  };

  const renderImgList = () => {
    // Renders the list of images with their titles, dates, and explanations
    return imgList.map((img) => (
      <React.Fragment key={img.id}>
         {/* Renders the title of the image */}
        <Text style={styles.title}> {img.title}</Text>
         {/* Renders the image as a TouchableOpacity, which calls handleImagePress when pressed */}
        <TouchableOpacity onPress={() => handleImagePress(img.url)}>
          <Image source={{ uri: img.url }} style={styles.img} />
        </TouchableOpacity>
        {/* Renders the date of the image */}
        <Text style={styles.date}>{img.date}</Text>
        {/* Renders the explanation of the image, which is truncated to two lines by default */}
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text
            numberOfLines={isExpanded ? null : 2}
            style={styles.explanation}
          >
            {img.explanation}
          </Text>
          {/* Renders the "Read more" or "Read less" text based on whether the explanation is expanded or not */}
          <Text style={styles.read}>
            {isExpanded ? "Read less" : "Read more"}
          </Text>
        </TouchableOpacity>
      </React.Fragment>
    ));
  };
  

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableOpacity
          style={{ ...styles.button, marginTop: 10, marginBottom: 10 }}
          onPress={() => setShowCalendar(!showCalendar)}
        >
          <Text style={styles.buttonText}>
            {showCalendar ? "Hide Calendar" : "Show Calendar"}
          </Text>
        </TouchableOpacity>
        {showCalendar && (
          // Renders the calendar if showCalendar is true
          <Calendar onDayPress={(day) => setSelectedDate(day.dateString)} />
        )}
        {selectedDate && !showCalendar ? (
          // Renders the list of images if a date is selected
          <ScrollView contentContainerStyle={styles.scrollView}>
            {renderImgList()}
            <View style={{ height: 50 }} />
          </ScrollView>
        ) : (
          // Renders a message if no date is selected
          <Text style={styles.noDateSelected}>Please select a date</Text>
        )}
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.modalImg}
              resizeMode="contain" // Resize mode for the image
            />
            <TouchableOpacity
              // Button that closes the modal when pressed
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="times" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
