import React from 'react';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { Platform, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts,  Poppins_700Bold, Poppins_400Regular} from "@expo-google-fonts/poppins"


import HomeScreen from './src/telas/HomeScreen';
import ItensLista from './src/telas/ItensLista';


export default function App() {

  let[fontCarregada, fontError] = useFonts({
    "fontNormal": Poppins_400Regular,
    "fontNegrito": Poppins_700Bold
  })

  if(!fontCarregada && !fontError){
    return <View><Text>A fonte não pode ser carregada</Text></View>
  }

  const Stack = createNativeStackNavigator()

  return (    
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle:{
            backgroundColor:"#FFF"
          },
          headerTitleAlign:"center"
        }}     
      >

        <Stack.Screen 
        name="Home" 
        options={{title:'Listas de compras'}}
        component={HomeScreen}
        />
        <Stack.Screen 
        name="ItensLista"
        options={{title: "Itens da lista"}}
        component={ItensLista}
        />

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}




=======
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
>>>>>>> d3d0da6b1ebc75a6d177fa1e57d6c7734431536f
