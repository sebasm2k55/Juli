import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-gray-800 mb-8">Hola, [User Name]</Text>

      <View className="w-full grid grid-cols-2 gap-4">
        {/* Card 1: Asistente de Primeros Auxilios */}
        <TouchableOpacity
          className="bg-blue-500 p-6 rounded-lg items-center justify-center shadow-md"
          onPress={() => console.log('Navegar a Asistente de Primeros Auxilios')}
        >
          {/* Icono de cruz de primeros auxilios */}
          <Text className="text-white text-5xl mb-2">+</Text>
          <Text className="text-white text-lg font-semibold text-center">Asistente de Primeros Auxilios</Text>
        </TouchableOpacity>

        {/* Card 2: Recursos Cercanos */}
        <TouchableOpacity
          className="bg-green-500 p-6 rounded-lg items-center justify-center shadow-md"
          onPress={() => console.log('Navegar a Recursos Cercanos')}
        >
          {/* Icono de pin de mapa */}
          <Text className="text-white text-5xl mb-2">📍</Text>
          <Text className="text-white text-lg font-semibold text-center">Recursos Cercanos</Text>
        </TouchableOpacity>

        {/* Card 3: Agendar un Servicio */}
        <TouchableOpacity
          className="bg-purple-500 p-6 rounded-lg items-center justify-center shadow-md"
          onPress={() => console.log('Navegar a Agendar un Servicio')}
        >
          {/* Icono de calendario */}
          <Text className="text-white text-5xl mb-2">📅</Text>
          <Text className="text-white text-lg font-semibold text-center">Agendar un Servicio</Text>
        </TouchableOpacity>

        {/* Card 4: Mi Perfil y Consultas */}
        <TouchableOpacity
          className="bg-orange-500 p-6 rounded-lg items-center justify-center shadow-md"
          onPress={() => navigation.navigate('Profile')}
        >
          {/* Icono de persona */}
          <Text className="text-white text-5xl mb-2">👤</Text>
          <Text className="text-white text-lg font-semibold text-center">Mi Perfil y Consultas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;