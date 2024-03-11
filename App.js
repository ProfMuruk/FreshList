import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins'

import HomeScreen from './src/telas/HomeScreen';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return <View><Text>Algo deu errado com a fonte</Text></View>;
  }
  return (
    <SafeAreaView style={styles.plataforma}>
      <StatusBar style="auto" />
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  plataforma:{
    paddingTop: Platform.OS === 'ios' ? 0 : 50
  }
  
});
