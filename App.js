import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/telas/HomeScreen';


export default function App() {

  const Stack = createNativeStackNavigator()

  return (    
    <SafeAreaView style={styles.plataforma}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  plataforma:{
    paddingTop: Platform.OS==='ios' ? 0 : 50
  },
});


