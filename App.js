import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text} from 'react-native';
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
