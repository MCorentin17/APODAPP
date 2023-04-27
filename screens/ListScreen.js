import React, { useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity, Modal } from "react-native";
import { useEffect } from "react";
import { getPict } from "../data/Api";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/ListScreen.styles";

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

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImagePress = (url) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  const renderImgList = () => {
    const reversedImgList = [...imgList].reverse();

    return reversedImgList.map((img) => (
      <TouchableOpacity key={img.id} onPress={() => handleImagePress(img.url)}>
        <React.Fragment>
          <Text style={styles.title}>{img.title}</Text>
          <Image source={{ uri: img.url }} style={styles.img} />
          <Text style={styles.date}>{img.date}</Text>
        </React.Fragment>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderImgList()}
        </ScrollView>
        <View style={styles.scrollIndicator}>
          <Icon name="chevron-down" size={30} color="white" />
        </View>
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Image source={{ uri: selectedImage }} style={styles.modalImage} resizeMode="contain" />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Icon name="times" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
