import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

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
        <Image
          source={require('./assets/splash-icon.png')}
          className="w-48 h-48 mb-4"
          resizeMode="contain"
        />
        <Text className="text-4xl font-bold text-white mb-4">Uruguay Health App</Text>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-lg text-white mt-2">Cargando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}