import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Linking, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const FirstAidBotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleCall911 = () => {
    Alert.alert(
      "Llamar al 911",
      "¿Estás seguro de que quieres llamar al 911?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Llamar", onPress: () => Linking.openURL('tel:911') }
      ]
    );
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    setMessages([...messages, { id: messages.length, text: inputText, sender: 'user' }]);
    setInputText('');
    // Aquí iría la lógica para que el bot responda
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { id: prevMessages.length, text: "Gracias por tu mensaje. ¿En qué puedo ayudarte?", sender: 'bot' }]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View className="flex-1 bg-gray-100">
        {/* Disclaimer Box */}
        <View className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mx-4 mt-4 rounded-lg">
          <Text className="text-yellow-800 font-bold mb-2">¡Importante!</Text>
          <Text className="text-yellow-700 mb-3">
            Esta es una guía informativa. Si estás ante una emergencia real, presiona el botón para llamar al 911 ahora.
          </Text>
          <TouchableOpacity
            className="bg-red-600 p-3 rounded-lg items-center"
            onPress={handleCall911}
          >
            <Text className="text-white text-lg font-semibold">Llamar al 911</Text>
          </TouchableOpacity>
        </View>

        {/* Chat View */}
        <ScrollView className="flex-1 p-4">
          {messages.map((msg) => (
            <View
              key={msg.id}
              className={`p-3 rounded-lg mb-2 max-w-[80%] ${msg.sender === 'user' ? 'self-end bg-blue-500' : 'self-start bg-gray-300'}`}
            >
              <Text className={msg.sender === 'user' ? 'text-white' : 'text-gray-800'}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View className="flex-row items-center p-4 border-t border-gray-200 bg-white">
          <TextInput
            className="flex-1 border border-gray-300 rounded-full p-3 mr-2 text-lg"
            placeholder="Escribe tu mensaje..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSendMessage}
          />
          <TouchableOpacity
            className="bg-blue-600 p-3 rounded-full items-center justify-center w-12 h-12"
            onPress={handleSendMessage}
          >
            <Text className="text-white text-xl">➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FirstAidBotScreen;