import React from 'react';
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import Screens from './Navigation/Screens';


export default function App() {
 

  return (
    <SafeAreaProvider >
      <View style={{flex : 1 }}>
        <Screens />
      </View>
    </SafeAreaProvider>
  );
}


