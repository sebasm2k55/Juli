import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Datos de ejemplo para el historial de servicios
  const serviceHistory = [
    { id: '1', service: 'Teleconsulta de Enfermería', date: '2024-07-20', status: 'Completado' },
    { id: '2', service: 'Servicio de Acompañamiento', date: '2024-07-25', status: 'Pendiente' },
    { id: '3', service: 'Teleconsulta de Enfermería', date: '2024-07-10', status: 'Completado' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-gray-800 mb-6">Mi Perfil</Text>

      {/* Editar Perfil */}
      <TouchableOpacity
        className="bg-white p-4 rounded-lg mb-3 shadow-sm"
        onPress={() => console.log('Navegar a Editar Perfil')}
      >
        <Text className="text-lg font-semibold text-gray-700">Editar Perfil</Text>
        <Text className="text-sm text-gray-500">Nombre, Número de Teléfono</Text>
      </TouchableOpacity>

      {/* Historial de Servicios */}
      <View className="bg-white p-4 rounded-lg mb-3 shadow-sm">
        <Text className="text-lg font-semibold text-gray-700 mb-3">Historial de Servicios</Text>
        {serviceHistory.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="border-b border-gray-200 py-2"
            onPress={() => console.log('Ver detalles del servicio', item.id)}
          >
            <Text className="text-base text-gray-800">{item.service}</Text>
            <Text className="text-sm text-gray-500">Fecha: {item.date} - Estado: {item.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Términos y Condiciones */}
      <TouchableOpacity
        className="bg-white p-4 rounded-lg mb-3 shadow-sm"
        onPress={() => console.log('Navegar a Términos y Condiciones')}
      >
        <Text className="text-lg font-semibold text-gray-700">Términos y Condiciones</Text>
      </TouchableOpacity>

      {/* Contacto y Ayuda */}
      <TouchableOpacity
        className="bg-white p-4 rounded-lg mb-3 shadow-sm"
        onPress={() => console.log('Navegar a Contacto y Ayuda')}
      >
        <Text className="text-lg font-semibold text-gray-700">Contacto y Ayuda</Text>
      </TouchableOpacity>

      {/* Cerrar Sesión */}
      <TouchableOpacity
        className="bg-red-500 p-4 rounded-lg items-center mt-4 shadow-sm"
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-white text-lg font-semibold">Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;