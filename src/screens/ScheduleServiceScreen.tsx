import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleServiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar un Servicio</Text>
      {/* Scheduling form and logic will go here */}
      <Text>Formulario para agendar un servicio.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ScheduleServiceScreen;