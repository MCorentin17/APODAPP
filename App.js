import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; // import des composants pour gérer les zones sécurisées
import BottomTab from './components/BottomTab';


export default function App() {
 

  return (
    <SafeAreaProvider >
      <View style={styles.container}>
        <BottomTab />
      </View>
    </SafeAreaProvider>
  );
}

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
