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
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      getPictByDate(selectedDate).then((newImgList) => {
        setImgList(newImgList);
        setShowCalendar(false);
      });
    }
  }, [selectedDate]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImagePress = (url) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  const renderImgList = () => {
    return imgList.map((img) => (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <TouchableOpacity onPress={() => handleImagePress(img.url)}>
          <Image source={{ uri: img.url }} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.date}>{img.date}</Text>
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
          <Calendar onDayPress={(day) => setSelectedDate(day.dateString)} />
        )}
        {selectedDate && !showCalendar ? (
          <ScrollView contentContainerStyle={styles.scrollView}>
            {renderImgList()}
            <View style={{ height: 50 }} />
          </ScrollView>
        ) : (
          <Text style={styles.noDateSelected}>Please select a date</Text>
        )}
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={styles.modalImg}
              resizeMode="contain"
            />
            <TouchableOpacity
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
