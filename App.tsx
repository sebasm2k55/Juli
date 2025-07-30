import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FirstAidBotScreen from './src/screens/FirstAidBotScreen'; // Importar FirstAidBotScreen

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Muestra la pantalla de splash por 3 segundos
  }, []);

  if (showSplash) {
    return (
      <View className="flex-1 items-center justify-center bg-blue-500">
        <Text className="text-4xl font-bold text-white mb-4">Uruguay Health App</Text>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-lg text-white mt-2">Cargando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi Perfil' }} />
        <Stack.Screen name="FirstAidBot" component={FirstAidBotScreen} options={{ title: 'Asistente de Primeros Auxilios' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}