import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getPictByDate } from "../data/Api";
import styles from "../styles/HomePage.styles";

Icon.loadFont();

export default function HomePage() {
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

  useEffect(() => {
    if (selectedDate) {
      getPictByDate(selectedDate).then((newImgList) => {
        setImgList(newImgList);
      });
    }
  }, [selectedDate]);

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
        <Calendar onDayPress={(day) => setSelectedDate(day.dateString)} />
        {selectedDate ? (
          <ScrollView contentContainerStyle={styles.scrollView}>
            {renderImgList()}
          </ScrollView>
        ) : (
          <Text style={styles.noDateSelected}>Please select a date</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
