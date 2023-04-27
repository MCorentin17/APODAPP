import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getPictByDate } from "../data/Api";
import styles from "../styles/SearchScreen.styles";



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

  useEffect(() => {
    if (selectedDate) {
      getPictByDate(selectedDate).then((newImgList) => {
        setImgList(newImgList);
        setShowCalendar(false);
      });
    }
  }, [selectedDate]);

  const renderImgList = () => {
    const img = imgList[imgList.length - 1];
    return (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <Image source={{ uri: img.url }} style={styles.img} />
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
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <TouchableOpacity style={{...styles.button, marginTop: 10, marginBottom: 10}} onPress={() => setShowCalendar(!showCalendar)}>
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
            <View style={{height: 50}} /> 
          </ScrollView>
        ) : (
          <Text style={styles.noDateSelected}>Please select a date</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
