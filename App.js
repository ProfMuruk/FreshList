import React from 'react';
import {View, Text} from 'react-native';
import { useFonts,  Poppins_700Bold, Poppins_400Regular} from "@expo-google-fonts/poppins"
import Routes from './src/telas/Routes';

export default function App() {

  let[fontCarregada, fontError] = useFonts({
    "fontNormal": Poppins_400Regular,
    "fontNegrito": Poppins_700Bold
  })

  if(!fontCarregada && !fontError){
    return <View><Text>A fonte não pode ser carregada</Text></View>
  }
  return (    
    <Routes />
  );
}
