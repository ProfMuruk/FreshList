import React, { useEffect }from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { initDB } from "../../dataBase/SQLiteManager";

import HomeScreen from '../HomeScreen'
import ItensLista from '../ItensLista'
import CriarLista from "../CriarLista";


export default function Routes() {
    const Stack = createNativeStackNavigator()

    useEffect(() =>{
        initDB();
        console.log("Banco de dados inicializado com sucesso")
    }, [])

  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "Listas de compras" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ItensLista"
          options={{ title: "Itens da lista" }}
          component={ItensLista}
        />

        <Stack.Screen
          name="CriarLista"
          options={{ title: "Lista de compras" }}
          component={CriarLista}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
