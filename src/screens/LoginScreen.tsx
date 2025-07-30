import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación aquí
    console.log('Email:', email, 'Password:', password);
    navigation.navigate('Home'); // Navegar a Home después del login
  };

  const handleGoogleLogin = () => {
    console.log('Login con Google');
    // Lógica de login con Google
    navigation.navigate('Home');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      {/* Placeholder para el logo */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Reemplazar con tu logo real
        className="w-36 h-36 mb-8 rounded-full"
      />
      <Text className="text-3xl font-bold text-gray-800 mb-8">Bienvenido</Text>

      <TextInput
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg text-lg"
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg"
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="w-full bg-blue-600 p-4 rounded-lg items-center mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-xl font-semibold">Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text className="text-gray-600 mb-4">o</Text>

      <TouchableOpacity
        className="w-full bg-red-500 p-4 rounded-lg items-center flex-row justify-center mb-6"
        onPress={handleGoogleLogin}
      >
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} // Icono de Google
          className="w-6 h-6 mr-2"
        />
        <Text className="text-white text-xl font-semibold">Continuar con Google</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <TouchableOpacity onPress={() => console.log('Términos de Servicio')}>
          <Text className="text-blue-600 text-base underline">Términos de Servicio</Text>
        </TouchableOpacity>
        <Text className="text-gray-600 text-base mx-2">y</Text>
        <TouchableOpacity onPress={() => console.log('Política de Privacidad')}>
          <Text className="text-blue-600 text-base underline">Política de Privacidad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;