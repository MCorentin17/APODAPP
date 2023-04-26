import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react"; // import des hooks
import { getPict } from "../data/Api"; // import de la fonction getPict depuis le fichier Api.js
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // import d'une icône
import styles from "../styles/ListPage.styles";

export default function ListPage() {
  // Initialisation d'un tableau vide d'images, contenant un objet pour l'exemple
  const [imgList, setImgList] = useState([
    {
      id: 0,
      url:
        "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2&concept_tags=True",
      date: "",
      title: "",
    },
  ]);

  // Chargement de l'icône utilisée dans le composant BottomTab
  Icon.loadFont();

  // Utilisation du hook useEffect pour exécuter la fonction getPict au montage du composant
  useEffect(() => {
    getPict().then((newImgList) => {
      setImgList(newImgList);
    });
  }, []);

  // Fonction pour afficher la liste d'images
  const renderImgList = () => {
    // Utilisez la méthode .reverse() pour inverser l'ordre des éléments dans le tableau
    const reversedImgList = [...imgList].reverse();

    return reversedImgList.map((img) => (
      <React.Fragment key={img.id}>
        <Text style={styles.title}> {img.title}</Text>
        <Image source={{ uri: img.url }} style={styles.img} />
        <Text style={styles.text}>Image du {img.date} :</Text>
      </React.Fragment>
    ));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderImgList()}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


